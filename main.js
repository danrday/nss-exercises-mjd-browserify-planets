"use strict";

let MySolarSystem = require("./solarSystem");


let promiseAJAX = function () {
  return new Promise((resolve, reject) => {
    //AJAX request for planets.json
    $.ajax({
      url: "planets.json",
      //passes the parsed json object to print function
    }).done( function(data) {
      console.log("data:", data);
      resolve(data);
      });
  }); // end promise object
}


promiseAJAX()
  .then(function(data) {
    console.log("TEST", data)
    let $outputDOM = $("#outputDOM");
    // $outputDOM.html("TEST");
    MySolarSystem.Earth($outputDOM, data);

    $outputDOM.append("<br>")
   
    MySolarSystem.Mercury($outputDOM, data);

    $outputDOM.append("<br>")

    MySolarSystem.Venus($outputDOM, data);

    $outputDOM.append("<br>")

    MySolarSystem.Mars($outputDOM, data);

    $outputDOM.append("<br>")

    MySolarSystem.Jupiter($outputDOM, data);

    $outputDOM.append("<br>")

    MySolarSystem.Saturn($outputDOM, data);

    $outputDOM.append("<br>")

    MySolarSystem.Uranus($outputDOM, data);

    $outputDOM.append("<br>")

    MySolarSystem.Neptune($outputDOM, data);

    $outputDOM.append("<br>")

  });