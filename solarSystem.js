"use strict";

/*
  The functionality for adding, subtracting, multiplying, and dividing
  are broken out into individual modules. Require those into this module.
 */
const Earth = require("./earth");
const Mercury = require("./mercury");
const Venus = require("./venus");
const Mars = require("./mars");
const Jupiter = require("./jupiter");
const Saturn = require("./saturn");
const Uranus = require("./uranus");
const Neptune = require("./neptune");
/* 
  Now, construct an object that contains a key/value pair for each
  of those modules that we pulled into this one
*/
let SolarSystem = {
  Earth, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune
};

/*
  Every module needs to specify what its output is. Think of this as the
  return statement in a function. What are we returning for use by other
  modules in the application?
 */
module.exports = SolarSystem;