// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: March 2025
// This file contains the JS functions for index.html

/**
 * Show volume
 */
function enterClicked() {
  // input
  const radiusNumber = document.getElementById("radius-number").value
  const heightNumber = document.getElementById("height-number").value
  // output
  document.getElementById("volume").innerHTML =
    "Your volume is: " + radiusNumber + ", " + heightNumber + "."
}
