"use strict";

function outputTo(domElement, jsonData) {
  // domElement.html(jsonData.planets[0].jupiter);
  for (var x in jsonData.planets[0].jupiter) {
  // console.log(x, jsonData.planets[0].jupiter[x]);
  domElement.append(`<div>${x}: ${jsonData.planets[0].jupiter[x]}</div`)
  }
}

module.exports = outputTo;