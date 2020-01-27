const fetch = require('node-fetch');

//Get hook data from config.
const {
  token,
  branch
} = require('/config.js');

//Get package.json from the repo.
const getPackageFromRepo = async (url,token) =>{

  const headers = {
    'Content-Type'  : 'application/json',
    'Authorization' : token,
    'Accept':'application/vnd.github.v3.raw'
  };

  const result = await fetch(url,{
	method: 'GET',
    headers
  });

  return await result.json();

};

//Match if the file version is the correct.
const matchFiles = async () => {

  console.log('Running Node.js package.json - version control')

  //Get from current package.json
  const {
    version,
    repository
  } = require('./package.json');

  const {
    url
  } = repository;

  //Get api url from package repo url.
  const apiFile = `${url.replace('https://github.com/',' https://api.github.com/repos/')}/contents/package.json?ref=${branch}`;

  //Get the file.
  const gitFile = await getPackageFromRepo(apiFile, token);

  if (version!==gitFile.version){
    console.err('Package.json version mismatch', version,gitFile.version,' please update the file version and commit again!!');
    process.exit(1);
  } else
    process.exit(0);

}

//Run GIT hook.
matchFiles()
  .then(ok => console.log(ok));
  .catch(err => console.err(err));