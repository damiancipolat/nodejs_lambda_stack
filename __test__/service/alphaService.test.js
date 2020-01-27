describe('Alpha service test', () => {

    beforeEach(() => {
      jest.resetModules();
    });

    it('Apha service - test',() => {

        const alpha = require('../../src/service/alphaService.js');
        const conSpy = jest.spyOn(console, 'log').mockImplementation(() => null);   
    
        alpha.alphaService(1,2);
        
        expect(conSpy).toBeCalled();
        
    });

});