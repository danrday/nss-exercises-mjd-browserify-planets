"use strict";

function outputTo(domElement, jsonData) {
  // domElement.html(jsonData.planets[0].uranus);
  for (var x in jsonData.planets[0].uranus) {
  // console.log(x, jsonData.planets[0].uranus[x]);
  domElement.append(`<div>${x}: ${jsonData.planets[0].uranus[x]}</div`)
  }
}

module.exports = outputTo;