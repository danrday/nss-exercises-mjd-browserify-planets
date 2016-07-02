"use strict";

function outputTo(domElement, jsonData) {
  // domElement.html(jsonData.planets[0].mars);
  for (var x in jsonData.planets[0].mars) {
  // console.log(x, jsonData.planets[0].mars[x]);
  domElement.append(`<div>${x}: ${jsonData.planets[0].mars[x]}</div`)
  }
}

module.exports = outputTo;