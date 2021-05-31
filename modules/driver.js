'use strict';
// const faker = require('faker')
const events = require('../events')

events.on('pickup', pickedUp)


/**
 * Monitor the system for events
 * @param {Object} payload 
 */

function pickedUp(payload) {
    setTimeout(() => {
        /**
         * Wait 1 second
Log “DRIVER: picked up [ORDER_ID]” to the console.
         */
        console.log(`DRIVER: picked up ${payload.orderID}`)
        /**
         * Emit an ‘in-transit’ event with the payload you received
         */
        events.emit('in-transit', payload)
    }, 1000)

    /**
     * Wait 3 seconds
     * Log “delivered” to the console
Emit a ‘delivered’ event with the same payload
     */

    setTimeout(() => {
        console.log(`DRIVER: delivered up ${payload.orderID}`)
        events.emit('delivered', payload);
        console.log('<------------------------- NEW ORDER -------------------------> ')
    }, 3000)
}

module.exports = {
    pickedUp: pickedUp,
}



// function pickupPackage(payload) {
//     console.log(payload)
// setTimeout(()=>{
//     console.log(`1`)
//     events.emit('in-transit', payload)
// }, 1000)
// setTimeout(()=>{
//     console.log(`2`)
//     events.emit(`delivered`, payload)
// }, 3000)
// }

// function intransitPackage(payload) {
//     console.log(payload)
// }

// function deliverPackage(payload) {
//     console.log(payload)

// }

