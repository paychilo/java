window.addEventListener('DOMContentLoaded', function () {
"use strict";
let calc = require('./calc.js'),
    forms = require('./forms.js'),
    slider = require('./slider.js'),
    tabs = require('./tabs.js'),
    timer = require('./timer.js'),
    modalBlocks = require('./modalBloks.js');

  calc();
  forms();
  slider();
  tabs();
  timer();
  modalBlocks();  
});