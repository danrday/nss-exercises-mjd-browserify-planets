"use strict";

function outputTo(domElement, jsonData) {
  // domElement.html(jsonData.planets[0].neptune);
  for (var x in jsonData.planets[0].neptune) {
  // console.log(x, jsonData.planets[0].neptune[x]);
  domElement.append(`<div>${x}: ${jsonData.planets[0].neptune[x]}</div`)
  }
}

module.exports = outputTo;