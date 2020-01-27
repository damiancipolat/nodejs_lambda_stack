describe('Beta service test', () => {

    beforeEach(() => {
      jest.resetModules();
    });

    it('Beta service - test',() => {

        const beta = require('../../src/service/betaService.js');
        const conSpy = jest.spyOn(console, 'log').mockImplementation(() => null);   
    
        beta.betaService(1,2);
        
        expect(conSpy).toBeCalled();
        
    });

});