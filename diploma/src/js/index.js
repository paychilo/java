window.addEventListener('DOMContentLoaded', function () {
  "use strict";
  let modal60 = require('./parts/modal60.js'),
    timer = require('./parts/timer.js'),
    tabs2 = require('./parts/tabs2.js'),
    pict = require('./parts/pict.js'),
    modalCall = require('./parts/modalCall.js'),
    tabs = require('./parts/tabs.js'),
    modalPopup = require('./parts/modal.js'),
    calc = require('./parts/calc.js');   
  
  timer();
  // modal60();
  tabs2();
  tabs();
  pict();
  modalCall();
  modalPopup();
  calc();
  });