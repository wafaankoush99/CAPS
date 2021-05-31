'use strict';

// Global Event Pool 

const Events = require('events');
const myEvents = new Events(); 

// singleton
module.exports = myEvents;
