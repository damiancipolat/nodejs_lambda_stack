const alpha = require('../service/alphaService');

const alphaLambda = () => {

    return alpha(1,2);

};

exports.handler = alphaLambda;