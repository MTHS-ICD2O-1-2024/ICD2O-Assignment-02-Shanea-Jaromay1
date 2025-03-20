// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: March 2025
// This file contains the JS functions for index.html

/**
 * Show area
 */
function enterClicked() {
  // input
  const radiusNumber = document.getElementById("radius-number").value
  const heightNumber = document.getElementById("height-number").value

  // process
  let areaOfCylinder = 2 * Math.PI * radiusNumber * ( radiusNumber + heightNumber)

  // output
  document.getElementById("area").innerHTML =
    'Your surface area is: ' + areaOfCylinder + ' cm²'
}
