const beta = require('../service/betaService');

const betaLambda = () => {

    return beta(1,2);

};

exports.handler = betaLambda;