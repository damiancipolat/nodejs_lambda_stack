describe('Beta lambda test', () => {

    beforeEach(() => {
      jest.resetModules();
    });

    it('Lambda beta - test', async () => {


        const service = require('../../src/service/betaService.js');
        const betaSpy = jest.spyOn(service, 'betaService').mockImplementation(() => {null});

        const beta = require('../../src/functions/betaLambda.js');        
    
        await beta.handler();
        
        expect(betaSpy).toBeCalled();
        
    });

});