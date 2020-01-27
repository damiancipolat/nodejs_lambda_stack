describe('Alpha lambda test', () => {

    beforeEach(() => {
      jest.resetModules();
    });

    it('Lambda alpha - test',async () => {


        const service = require('../../src/service/alphaService.js');
        const alphaSpy = jest.spyOn(service, 'alphaService').mockImplementation(() => {null});

        const alpha = require('../../src/functions/alphaLambda.js');        
    
        await alpha.handler();
        
        expect(alphaSpy).toBeCalled();
        
    });

});