const {
    betaService
} = require('../service/betaService');

const betaLambda = async () => {

    return betaService(1,2);

};

exports.handler = betaLambda;