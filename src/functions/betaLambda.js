const {
    betaService
} = require('../service/betaService');

const betaLambda = () => {

    return betaService(1,2);

};

exports.handler = betaLambda;