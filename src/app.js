import React, { Component } from "react";
import FifthDimension from "./fifthdimension";
import Startpage from "./startpage";
import Archive from "./archive.js";

let game = true;
let images = [
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.12.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.29.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.32.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.37.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png",
  "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.47.png"
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gametoggled: false,
      gameOrArchive: "game",
      buttontext: "change to archive view"
    };
    this.changeToArchiveOrGame = this.changeToArchiveOrGame.bind(this);
    this.setConditional = this.setConditional.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
  }
  changeToArchiveOrGame() {
    if (this.state.gameOrArchive == "game") {
      this.setState({
        gameOrArchive: "archive",
        buttontext: "change to game"
      });
    } else {
      this.setState({
        gameOrArchive: "game",
        buttontext: "change to archive view"
      });
    }
  }
  setConditional() {
    if (this.state.gametoggled == false) {
      this.setState({ gametoggled: true });
      let canvases = document.getElementsByTagName("canvas");
      if (canvases.length > 1) {
        canvases[0].parentNode.removeChild(canvases[1]);
      }
    } else {
      this.setState({ gametoggled: false });
    }
  }

  render() {
    const gameOrArchive = this.state.gameOrArchive;
    let gameorarchivecomponenet;
    if (gameOrArchive == "game") {
      gameorarchivecomponenet = (
        <button
          className="gameOrArchiveToggler"
          onClick={this.changeToArchiveOrGame}
        >
          {" "}
          {this.state.buttontext}{" "}
        </button>
      );
    } else if (gameOrArchive == "archive") {
      gameorarchivecomponenet = <Archive />;
    }
    return (
      <div id="app">
        <FifthDimension setConditional={this.setConditional} images={images} />
        <Startpage />
      </div>
    );
  }
}
