describe('Mailer test', () => {

    beforeEach(() => {
      jest.resetModules();
    });

    it('Send - test',() => {

        const mail = require('../../src/lib/mail.js');
        const conSpy = jest.spyOn(console, 'info').mockImplementation(() => null);    
    
        mail.send('Damian@test.com', 'Test@test.com', 'Mock subject', 'asdsadsadsadsad');
        expect(conSpy.mock.calls[0][0]).toBe('Sending....');
        expect(conSpy).toBeCalled();
        
    });

});