const {
    alphaService
} = require('../service/alphaService');

const alphaLambda = async () => {

    return alphaService(1,2);

};

exports.handler = alphaLambda;