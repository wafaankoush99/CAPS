'use strict';


const events = require('../events.js');


let order = {
    store: '1-206-flowers',
    orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'Jamal Braun',
    address: 'Schmittfort, LA'
};



describe('testing event handlers', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
      
    it('call pickup package ', async () => {
        events.emit('pickup', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('call in-transit package ', async () => {
        events.emit('in-transit', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('call delivered package', async () => {
        events.emit('delivered', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });


    afterAll(() => {
        consoleSpy.mockRestore();
    });

});