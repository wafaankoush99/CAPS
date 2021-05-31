'use strict';

/**
 * Main Hub Application
 */
require('dotenv').config();
const events = require('./events');
const faker = require('faker')

require('./modules/vendor.js')
require('./modules/driver.js')

// const handlers = require('./events')

events.on('pickup', pickupHandler)
events.on('in-transit', transitHandler)
events.on('delivered', deliveredHandler)


/**
 * Manage Random Data
 */
var hours = (new Date()).getHours();
var minutes = (new Date()).getMinutes();
var seconds = (new Date()).getSeconds();

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

// EVENT { event: 'pickup',
//   time: 2020-03-06T18:27:17.732Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }



/**
 * MAnage The State Of pickup Package
 * @param {Object} payload 
 */
function pickupHandler(payload){
    console.log('EVENT', {
        event: 'pickup',
        time: `${today}T18:${hours}:${minutes}:${seconds}Z`,
        payload: payload
    })
}

/**
 * MAnage The State Of in-transit Package
 * @param {Object} payload 
 */
function transitHandler(payload){
    console.log('EVENT', {
        event: 'in-transit',
        time: `${today}T18:${hours}:${minutes}:${seconds}Z`,
        payload: payload
    })
}

/**
 * MAnage The State Of delivered Package
 * @param {Object} payload 
 */
function deliveredHandler(payload){
    console.log('EVENT', {
        event: 'delivered',
        time: `${today}T18:${hours}:${minutes}:${seconds}Z`,
        payload: payload
    })
}

module.exports = { 
    pickupHandler: pickupHandler,
    transitHandler: transitHandler,
    deliveredHandler: deliveredHandler
 }

// const myInterval = setInterval(() => {
//     events.emit('pickup', {
//         event: 'pickup',
//         time: `${today}T18:${hours}:${minutes}:${seconds}Z`,
//         payload: order
//     });
//     console.log(`DRIVER: picked up ${order.orderID}`)
//     // console.log('inside pickup')
//     // console.log('jjjjj')
// }, 5000)

// setTimeout(() => {
//     clearInterval(myInterval);
// }, 1000);

// setTimeout(()=>{
//     console.log(`DRIVER: picked up ${order.orderID}`)
// }, 1000)


/////////////////////////////////////////////////////////////////
// const myInterval2 = setTimeout(() => {
//     events.emit('in-transit', {
//         event: 'in-transit',
//         time: `${today}T18:${hours}:${minutes}:${seconds}Z`,
//         payload: order
//     });
//     console.log(`DRIVER: delivered up ${order.orderID}`)
//     console.log(`VENDOR: Thank you for delivering ${order.orderID}`)


//     // console.log('inside in-transit')
// }, 2000)

// setTimeout(() => {
//     clearInterval(myInterval2);
// }, 6000);

// setTimeout(()=>{
//     console.log(`DRIVER: delivered up ${order.orderID}`)
// }, 3000)

// setTimeout(()=>{
//     console.log(`VENDOR: Thank you for delivering ${order.orderID}`)
// }, 3000)

////////////////////////////////////////////////////////////////

// const myInterval3 = setTimeout(() => {
//     events.emit('delivered', {
//         event: 'delivered',
//         time: `${today}T18:${hours}:${minutes}:${seconds}Z`,
//         payload: order
//     });
//     // console.log('inside delivered')
// }, 3000)

// setTimeout(() => {
//     clearInterval(myInterval3);
// }, 10000);



