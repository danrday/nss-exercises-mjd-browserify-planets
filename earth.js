"use strict";

function outputTo(domElement, jsonData) {
  // domElement.html(jsonData.planets[0].earth);
  for (var x in jsonData.planets[0].earth) {
  // console.log(x, jsonData.planets[0].earth[x]);
  domElement.append(`<div>${x}: ${jsonData.planets[0].earth[x]}</div`)
  }
}

module.exports = outputTo;