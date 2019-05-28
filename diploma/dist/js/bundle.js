/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  "use strict";
  let modal60 = __webpack_require__(/*! ./parts/modal60.js */ "./src/js/parts/modal60.js"),
    timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
    tabs2 = __webpack_require__(/*! ./parts/tabs2.js */ "./src/js/parts/tabs2.js"),
    pict = __webpack_require__(/*! ./parts/pict.js */ "./src/js/parts/pict.js"),
    modalCall = __webpack_require__(/*! ./parts/modalCall.js */ "./src/js/parts/modalCall.js"),
    tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
    modalPopup = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js");   
  
  timer();
  modal60();
  tabs2();
  tabs();
  pict();
  modalCall();
  modalPopup();
  });

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalPopup() {
  let phoneLinks = document.querySelectorAll('.phone_link'),
    overlay = document.querySelector('.overlay'),
    popup = document.querySelector('.popup'),
    closeBtn = popup.querySelector('.popup_close');

  console.log(phoneLinks);

  for (let i = 0; i < phoneLinks.length; i++) {
    phoneLinks[i].addEventListener('click', (e) => {
      e.preventDefault();
      console.log('salypa');
      popup.style.display = 'block';
      overlay.style.display = 'block';
      closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
      });
      popup.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('popup')) {
          overlay.style.display = "none";
          popup.style.display = 'none';
        }
      });
    });
  }
}

module.exports = modalPopup;

/***/ }),

/***/ "./src/js/parts/modal60.js":
/*!*********************************!*\
  !*** ./src/js/parts/modal60.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal60() {
  let popup = document.querySelector('.popup'),
    popupClose = document.querySelector('.popup_close'),
    overlay = document.querySelector('.overlay');
  

  setTimeout(() => {
    if (popup.style.display == 'block') {
      clearTimeout();
    } else {
      popup.style.display = 'block';
      overlay.style.display = 'block';
      popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
      });
      popup.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('popup')) {
          overlay.style.display = "none";
          popup.style.display = 'none';
        }
      });
    }
  }, 60000);
}

module.exports = modal60;

/***/ }),

/***/ "./src/js/parts/modalCall.js":
/*!***********************************!*\
  !*** ./src/js/parts/modalCall.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalCall() {
  let modal = document.querySelector('.popup_engineer'),
    btn = document.querySelector('.header_btn'),
    overlay = document.querySelector('.overlay'),
    closeBtn = modal.querySelector('.popup_close');

btn.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });
  modal.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup_engineer')) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }
  });
});
    
  
}

module.exports = modalCall;

/***/ }),

/***/ "./src/js/parts/pict.js":
/*!******************************!*\
  !*** ./src/js/parts/pict.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function pict() {
  let pict = document.querySelector('.works'),
    href = pict.getElementsByTagName('a'),
    overlay = document.getElementsByClassName('overlay')[0],
    div = document.createElement('div');
  
    href[0].addEventListener('click', function (event) {
      event.preventDefault();
      div.innerHTML = `<img src="img/our_works/big_img/1.png" alt="">`;
      div.classList.add('img_pict');
      pict.appendChild(div);
      overlay.style.display = 'block';
      div.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('img_pict')) {
          overlay.style.display = "none";
          div.remove();
        }
      });
    });
  
    href[1].addEventListener('click', function (event) {
      event.preventDefault();
      div.innerHTML = `<img src="img/our_works/big_img/2.png" alt="">`;
      div.classList.add('img_pict');
      pict.appendChild(div);
      overlay.style.display = 'block';
      div.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('img_pict')) {
          overlay.style.display = "none";
          div.remove();
        }
      });
    });
}

module.exports = pict;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  let slider = document.querySelector('.glazing_slider'),
  slideIndex = 1,
  tree = document.querySelectorAll('.container')[2],
  links = slider.getElementsByTagName('a'),
  noPadding = tree.getElementsByClassName('row');

  showSlides(slideIndex);

  function showSlides() {
    for (let i = 0; i < noPadding.length; i++) {
      noPadding[i].style.display = 'none';
    }
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    noPadding[slideIndex - 1].style.display = 'block';
    links[slideIndex -1].classList.add('active');
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  slider.addEventListener('click',  (event) => {
    for (let i = 0; i < links.length + 1; i++) {
      if (event.target.classList.contains('links') && event.target == links[i - 1]) {
        currentSlide(i);
      }
    }
  });

}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/tabs2.js":
/*!*******************************!*\
  !*** ./src/js/parts/tabs2.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs2() {
  let slider = document.querySelector('.decoration_slider'),
    slideIndex = 1,
    tabs = document.querySelectorAll('.decoration_content_tab'),
    links = slider.getElementsByTagName('a'),
    noClick = slider.getElementsByClassName('no_click');

  showSlides(slideIndex);

  function showSlides() {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    }
    for (let i = 0; i < noClick.length; i++) {
      noClick[i].classList.remove('after_click');
    }
    tabs[slideIndex - 1].style.display = 'block';
    noClick[slideIndex - 1].classList.add('after_click');
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  slider.addEventListener('click',  (event) => {
    for (let i = 0; i < links.length + 1; i++) {
      if (event.target.classList.contains('links') && event.target == links[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = tabs2;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  let deadline = '2019-12-18';


  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      days = Math.floor((t / 1000 / 60 / 60 / 24));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
      'days': days
    };
  }

  function setClock(endtime) {
    let 
      seconds = document.getElementById('seconds'),
      minutes = document.getElementById('minutes'),
      hours = document.getElementById('hours'),
      days = document.getElementById('days'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      } else {
        days.textContent = t.days;
        if (t.hours < 10) {
          hours.textContent = '0' + t.hours;
        } else {
          hours.textContent = t.hours;
        }
        if (t.minutes < 10) {
          minutes.textContent = '0' + t.minutes;
        } else {
          minutes.textContent = t.minutes;
        }
        if (t.seconds < 10) {
          seconds.textContent = '0' + t.seconds;
        } else {
          seconds.textContent = t.seconds;
        }
      }
    }
  }
  setClock(deadline);
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map