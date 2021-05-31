'use strict';

const events = require('../events');
require('dotenv').config();
const faker = require('faker');

// const handlers = require('./driver');

/**
 * simulate a new customer order, Every 5 seconds
 * Create a fake order, as an object
 */
setInterval(() => {
    let order = {
        store: process.env.STORE_NAME,
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: faker.address.cityName()
    }
    /**
     * Emit a pickup event and attach the fake order as payload
     */
    events.emit('pickup', order)
}, 5000)


/**
 * Monitor the system for events …
Whenever the ‘delivered’ event occurs
 */
events.on('delivered', (payload)=>{
    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`)
})

