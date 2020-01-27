const {
    alphaService
} = require('../service/alphaService');

const config = require('config');
const values = config.get('values');

const {
    loan,
    table
} = config.get('system-env');


const alphaLambda = async () => {

    //Test variable - env echo.
    console.log('> System environments:', loan, table);
    console.log('> Values:',values);

    return alphaService(1,2);

};

exports.handler = alphaLambda;