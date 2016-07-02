"use strict";

function outputTo(domElement, jsonData) {
  // domElement.html(jsonData.planets[0].mercury);
  for (var x in jsonData.planets[0].earth) {
  // console.log(x, jsonData.planets[0].mercury[x]);
  domElement.append(`<div>${x}: ${jsonData.planets[0].mercury[x]}</div`)
  }
}

module.exports = outputTo;