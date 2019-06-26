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
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("throw new Error(\"Module build failed: SyntaxError: Unexpected token, expected , (29:1)\\n\\n\\u001b[0m \\u001b[90m 27 | \\u001b[39m\\ttitle\\u001b[33m:\\u001b[39m __( \\u001b[32m'Figma'\\u001b[39m )\\u001b[33m,\\u001b[39m \\u001b[90m// Block title.\\u001b[39m\\n \\u001b[90m 28 | \\u001b[39m\\ticon\\u001b[33m:\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33msvg\\u001b[39m viewBox\\u001b[33m=\\u001b[39m\\u001b[32m\\\"0 0 24 24\\\"\\u001b[39m xmlns\\u001b[33m=\\u001b[39m\\u001b[32m\\\"http://www.w3.org/2000/svg\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mrect\\u001b[39m id\\u001b[33m=\\u001b[39m\\u001b[32m\\\"Rectangle\\\"\\u001b[39m fill\\u001b[33m=\\u001b[39m\\u001b[32m\\\"#333333\\\"\\u001b[39m x\\u001b[33m=\\u001b[39m\\u001b[32m\\\"0\\\"\\u001b[39m y\\u001b[33m=\\u001b[39m\\u001b[32m\\\"0\\\"\\u001b[39m width\\u001b[33m=\\u001b[39m\\u001b[32m\\\"24\\\"\\u001b[39m height\\u001b[33m=\\u001b[39m\\u001b[32m\\\"24\\\"\\u001b[39m rx\\u001b[33m=\\u001b[39m\\u001b[32m\\\"4\\\"\\u001b[39m\\u001b[35m/><path d=\\\"M9,21 C10.6565,21 12,19.6565 12,18 L12,15 L9,15 C7.3435,15 6,16.3435 6,18 C6,19.6565 7.3435,21 9,21\\\" id=\\\"Fill-1\\\" fill=\\\"#0ACF83\\\"/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mpath\\u001b[39m d\\u001b[33m=\\u001b[39m\\u001b[32m\\\"M6,12 C6,10.3435 7.3435,9 9,9 L12,9 L12,15 L9,15 C7.3435,15 6,13.6565 6,12\\\"\\u001b[39m id\\u001b[33m=\\u001b[39m\\u001b[32m\\\"Fill-3\\\"\\u001b[39m fill\\u001b[33m=\\u001b[39m\\u001b[32m\\\"#A259FF\\\"\\u001b[39m\\u001b[35m/><path d=\\\"M6,6 C6,4.3435 7.3435,3 9,3 L12,3 L12,9 L9,9 C7.3435,9 6,7.6565 6,6\\\" id=\\\"Fill-5\\\" fill=\\\"#F24E1E\\\"/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mpath\\u001b[39m d\\u001b[33m=\\u001b[39m\\u001b[32m\\\"M12,3 L15,3 C16.6565,3 18,4.3435 18,6 C18,7.6565 16.6565,9 15,9 L12,9 L12,3 Z\\\"\\u001b[39m id\\u001b[33m=\\u001b[39m\\u001b[32m\\\"Fill-7\\\"\\u001b[39m fill\\u001b[33m=\\u001b[39m\\u001b[32m\\\"#FF7262\\\"\\u001b[39m\\u001b[35m/><path d=\\\"M18,12 C18,13.6565 16.6565,15 15,15 C13.3435,15 12,13.6565 12,12 C12,10.3435 13.3435,9 15,9 C16.6565,9 18,10.3435 18,12\\\" id=\\\"Fill-9\\\" fill=\\\"#1ABCFE\\\"/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33msvg\\u001b[39m\\u001b[33m>\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 29 | \\u001b[39m\\tcategory\\u001b[33m:\\u001b[39m \\u001b[32m'embed'\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[90m// Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\\u001b[39m\\n \\u001b[90m    | \\u001b[39m\\t\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 30 | \\u001b[39m\\tkeywords\\u001b[33m:\\u001b[39m [\\n \\u001b[90m 31 | \\u001b[39m\\t\\t__( \\u001b[32m'Figma'\\u001b[39m )\\u001b[33m,\\u001b[39m\\n \\u001b[90m 32 | \\u001b[39m\\t\\t__( \\u001b[32m'Design'\\u001b[39m )\\u001b[33m,\\u001b[39m\\u001b[0m\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);