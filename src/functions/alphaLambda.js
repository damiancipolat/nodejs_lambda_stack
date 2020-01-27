const {
    alphaService
} = require('../service/alphaService');

const alphaLambda = () => {

    return alphaService(1,2);

};

exports.handler = alphaLambda;