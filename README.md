<img src="https://github.com/damiancipolat/nodejs_lambda_stack/blob/master/doc/logo.png?raw=true" width="150px" align="right" />

# Node.js AWS - Lambda stack
This repository was created to be used as a template for future projects.

### Scaffolding:

This modules are used in this project.

- Deploy: Serverless framework.
- Test: Jest
- Lint: es-lin / airbnb
- Config: https://www.npmjs.com/package/config

**Environments**:

The project is ready to work with 3 environments (dev / stage / production).

**Configuration**:

In the **/config** directory there are five files with a configuration schema to be used in the project: `dev.json`, `stage.json`, `production.json`, `default.json` and `custom-environment-variables.json`.

- default.json: Use this file when NODE_ENV = "".
- dev.json: Use this file when NODE_ENV = dev.
- stage.json: Use this file when NODE_ENV = stage.
- production.json: Use this file when NODE_ENV = production.
- **custom-environment-variables.json**: this is a special file, is used to mix the configuration schema with ENVIRONMENT VARIABLES,
map the variables name with environment variables with the same name, example:

```json
{
    "system-env":{
        "loan":"LOAN_NAME",
        "table":"TABLE_NAME"
    },
    "values":{}
}
```

In the example "values" is empty, and the interesting structured to map is "system-env" in this object the script will map the values "LOAN_NAME" and "TABLE_NAME" with environment variables, and finally can be accesed using the `config.get('system-env.loan');`. Take a look later to the file `serverless.yml` in the "environment" section.


### Install:
```sh
npm install serverless -g
npm install
```

### Command List:
```sh
#To check es-lint rules:
npm run check

#To run unit test and coverage:
npm test

#To run deploy:
npm run deploy
```

### Versions:
The project use SEMVER to track the changes in the package.json in the `version` key, there are a githook to avoid commit repeated
coded versions.

### To use as template:
```sh
```

# Project title:

Delete the last sections of the README.md to add in this section the new project information.
