"use strict";

function outputTo(domElement, jsonData) {
  // domElement.html(jsonData.planets[0].saturn);
  for (var x in jsonData.planets[0].saturn) {
  // console.log(x, jsonData.planets[0].saturn[x]);
  domElement.append(`<div>${x}: ${jsonData.planets[0].saturn[x]}</div`)
  }
}

module.exports = outputTo;