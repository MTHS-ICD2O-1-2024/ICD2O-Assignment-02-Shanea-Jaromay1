// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Show area
 */
function enterClicked() {
  // input
  const radiusNumber = parseFloat(document.getElementById("radius-number").value);
  const heightNumber = parseFloat(document.getElementById("height-number").value);

  // process
  const areaOfCylinder = 2 * Math.PI * radiusNumber * (radiusNumber + heightNumber);

  // output with more controlled precision
  document.getElementById("area").innerHTML = "Your surface area is:" + areaOfCylinder.toFixed(2) + "cm²";
}
