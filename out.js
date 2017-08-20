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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

$(document).ready(function () {
    $(".slider_container").slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* **************************************************\n\n                       GLOBALS\n\n***************************************************** */\n.global_container {\n  width: 1290px;\n  margin: 0 auto; }\n\n.li_nostyle li {\n  display: inline-block;\n  list-style: none; }\n\n.a_nostyle a {\n  text-decoration: none; }\n\n/* **************************************************\n\n                       HEADER\n\n***************************************************** */\nheader {\n  background-color: #f2f2f2; }\n\n.header_container {\n  height: 38px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.header_left {\n  font-size: 11px;\n  display: flex;\n  justify-content: space-between; }\n\n.header_left i {\n  margin-left: 7px;\n  margin-right: 20px; }\n\n.header_right a {\n  color: black;\n  font-size: 11px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 900;\n  text-transform: uppercase; }\n\n.header_right li {\n  margin-left: 60px; }\n\n.header_right li:nth-child(-n+3)::after {\n  content: '';\n  color: black;\n  width: 1px;\n  height: 8px;\n  background-color: black;\n  display: inline-block;\n  position: relative;\n  left: 30px; }\n\n/* **************************************************\n\n                     NAVIGATION\n\n***************************************************** */\n.nav_container {\n  height: 128px;\n  background-color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative; }\n\n.nav_container::after {\n  content: '';\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 60px 200px 0 200px;\n  border-color: #ffffff transparent transparent transparent;\n  position: absolute;\n  left: 440px;\n  right: 440px;\n  top: 128px;\n  z-index: 2; }\n\n.nav_menu {\n  display: flex;\n  justify-content: space-between; }\n\n.nav_menu a {\n  color: black;\n  font-family: 'Playfair Display', serif;\n  font-weight: bold;\n  font-size: 18px;\n  margin-right: 25px; }\n\n.nav_logo p {\n  font-family: 'Pacifico', cursive;\n  font-size: 72px;\n  color: black; }\n\n.nav_icons {\n  display: flex;\n  justify-content: center;\n  margin-left: 23px; }\n\n.nav_icons i {\n  color: #d9bf8f;\n  width: 34px;\n  height: 34px;\n  border: 2px solid #d9bf8f;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 31px;\n  margin-right: 12px; }\n\n.nav_icons select {\n  height: 35px;\n  width: 90px;\n  background-color: black;\n  color: white;\n  font-family: 'Lato', sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  text-align-last: center;\n  border: none;\n  margin-bottom: 3px;\n  margin-left: 52px; }\n\n/* **************************************************\n\n                     SLIDER\n\n***************************************************** */\n.slider_container {\n  height: 692px;\n  position: relative; }\n\n.slick-list, .slick-track {\n  height: 100%; }\n\n.slide_one {\n  background-image: url(" + __webpack_require__(7) + ");\n  background-size: cover;\n  background-position: center;\n  position: relative; }\n\n.first_square {\n  border: 2px solid white;\n  height: 277px;\n  width: 277px;\n  position: absolute;\n  bottom: 274px;\n  left: 506px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.second_square {\n  border: 1px solid white;\n  height: 264px;\n  width: 264px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-flow: column; }\n\n.square_param1 {\n  font-family: 'Lato', sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  color: white;\n  text-transform: uppercase;\n  margin-top: 10px; }\n\n.square_param2 {\n  font-family: 'Lato', sans-serif;\n  font-weight: bold;\n  font-size: 60px;\n  color: black;\n  text-transform: uppercase; }\n\n.square_param3 {\n  font-family: 'Lato', sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  color: white;\n  text-transform: uppercase;\n  position: absolute; }\n\n.line_left1 {\n  height: 1px;\n  width: 33px;\n  background-color: white;\n  position: relative;\n  right: 48px;\n  top: 10px; }\n\n.line_left2 {\n  height: 1px;\n  width: 60px;\n  background-color: white;\n  position: relative;\n  top: 16px;\n  right: 75px; }\n\n.line_right1 {\n  height: 1px;\n  width: 33px;\n  background-color: white;\n  position: relative;\n  right: -71px;\n  top: 8px; }\n\n.line_right2 {\n  height: 1px;\n  width: 60px;\n  background-color: white;\n  position: relative;\n  top: 14px;\n  right: -71px; }\n\n.square_param4 {\n  font-family: 'Lato', sans-serif;\n  font-weight: bold;\n  font-size: 30px;\n  text-transform: uppercase;\n  margin-bottom: 10px; }\n\n.slider_button {\n  width: 189px;\n  line-height: 53px;\n  background-color: #f09d66;\n  color: white;\n  font-family: 'Lato', sans-serif;\n  font-weight: bold;\n  font-size: 24px;\n  position: absolute;\n  left: 549px;\n  bottom: 166px;\n  text-align: center;\n  text-decoration: none; }\n\n.slide_two {\n  background-image: url(" + __webpack_require__(8) + ");\n  background-size: cover;\n  background-position: center; }\n\n.slide_three {\n  background-image: url(" + __webpack_require__(9) + ");\n  background-size: cover;\n  background-position: center; }\n\n.slide_four {\n  background-image: url(" + __webpack_require__(10) + ");\n  background-size: cover;\n  background-position: center; }\n\n.slick-dots {\n  bottom: 30px; }\n\n.slick-dots li {\n  margin: 0 8px; }\n\n.slick-dots li button:before {\n  content: \"\";\n  width: 19px;\n  height: 19px;\n  background-color: lightgrey;\n  border: 1px solid black;\n  transform: rotate(45deg); }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/stanislaw/Pulpit/Projekt/Project/node_modules/css-loader/lib/css-base.js'");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/stanislaw/Pulpit/Projekt/Project/node_modules/style-loader/lib/addStyles.js'");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/stanislaw/Pulpit/Projekt/Project/pictures/sliderone.jpg Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/stanislaw/Pulpit/Projekt/Project/pictures/slidertwo.jpg Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/stanislaw/Pulpit/Projekt/Project/pictures/sliderthree.jpg Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/stanislaw/Pulpit/Projekt/Project/pictures/sliderfour.jpg Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ })
/******/ ]);