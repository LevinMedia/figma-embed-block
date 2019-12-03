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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** ./src/block/icons.js ***!
  \****************************/
/*! exports provided: FigmaIcon */
/*! exports used: FigmaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return FigmaIcon; });\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar FigmaIcon = function FigmaIcon(props) {\n  return wp.element.createElement(\n    \"svg\",\n    _extends({ viewBox: \"0 0 24 24\", xmlns: \"http://www.w3.org/2000/svg\" }, props),\n    wp.element.createElement(\"rect\", { id: \"Rectangle\", fill: \"#333333\", x: \"0\", y: \"0\", width: \"24\", height: \"24\", rx: \"4\" }),\n    wp.element.createElement(\"path\", { d: \"M9,21 C10.6565,21 12,19.6565 12,18 L12,15 L9,15 C7.3435,15 6,16.3435 6,18 C6,19.6565 7.3435,21 9,21\", id: \"Fill-1\", fill: \"#0ACF83\" }),\n    wp.element.createElement(\"path\", { d: \"M6,12 C6,10.3435 7.3435,9 9,9 L12,9 L12,15 L9,15 C7.3435,15 6,13.6565 6,12\", id: \"Fill-3\", fill: \"#A259FF\" }),\n    wp.element.createElement(\"path\", { d: \"M6,6 C6,4.3435 7.3435,3 9,3 L12,3 L12,9 L9,9 C7.3435,9 6,7.6565 6,6\", id: \"Fill-5\", fill: \"#F24E1E\" }),\n    wp.element.createElement(\"path\", { d: \"M12,3 L15,3 C16.6565,3 18,4.3435 18,6 C18,7.6565 16.6565,9 15,9 L12,9 L12,3 Z\", id: \"Fill-7\", fill: \"#FF7262\" }),\n    wp.element.createElement(\"path\", { d: \"M18,12 C18,13.6565 16.6565,15 15,15 C13.3435,15 12,13.6565 12,12 C12,10.3435 13.3435,9 15,9 C16.6565,9 18,10.3435 18,12\", id: \"Fill-9\", fill: \"#1ABCFE\" })\n  );\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9pY29ucy5qcz9lZWQzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydCB2YXIgRmlnbWFJY29uID0gZnVuY3Rpb24gRmlnbWFJY29uKHByb3BzKSB7XG4gIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJzdmdcIixcbiAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgcHJvcHMpLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyBpZDogXCJSZWN0YW5nbGVcIiwgZmlsbDogXCIjMzMzMzMzXCIsIHg6IFwiMFwiLCB5OiBcIjBcIiwgd2lkdGg6IFwiMjRcIiwgaGVpZ2h0OiBcIjI0XCIsIHJ4OiBcIjRcIiB9KSxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNOSwyMSBDMTAuNjU2NSwyMSAxMiwxOS42NTY1IDEyLDE4IEwxMiwxNSBMOSwxNSBDNy4zNDM1LDE1IDYsMTYuMzQzNSA2LDE4IEM2LDE5LjY1NjUgNy4zNDM1LDIxIDksMjFcIiwgaWQ6IFwiRmlsbC0xXCIsIGZpbGw6IFwiIzBBQ0Y4M1wiIH0pLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk02LDEyIEM2LDEwLjM0MzUgNy4zNDM1LDkgOSw5IEwxMiw5IEwxMiwxNSBMOSwxNSBDNy4zNDM1LDE1IDYsMTMuNjU2NSA2LDEyXCIsIGlkOiBcIkZpbGwtM1wiLCBmaWxsOiBcIiNBMjU5RkZcIiB9KSxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNNiw2IEM2LDQuMzQzNSA3LjM0MzUsMyA5LDMgTDEyLDMgTDEyLDkgTDksOSBDNy4zNDM1LDkgNiw3LjY1NjUgNiw2XCIsIGlkOiBcIkZpbGwtNVwiLCBmaWxsOiBcIiNGMjRFMUVcIiB9KSxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMTIsMyBMMTUsMyBDMTYuNjU2NSwzIDE4LDQuMzQzNSAxOCw2IEMxOCw3LjY1NjUgMTYuNjU2NSw5IDE1LDkgTDEyLDkgTDEyLDMgWlwiLCBpZDogXCJGaWxsLTdcIiwgZmlsbDogXCIjRkY3MjYyXCIgfSksXG4gICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTE4LDEyIEMxOCwxMy42NTY1IDE2LjY1NjUsMTUgMTUsMTUgQzEzLjM0MzUsMTUgMTIsMTMuNjU2NSAxMiwxMiBDMTIsMTAuMzQzNSAxMy4zNDM1LDkgMTUsOSBDMTYuNjU2NSw5IDE4LDEwLjM0MzUgMTgsMTJcIiwgaWQ6IFwiRmlsbC05XCIsIGZpbGw6IFwiIzFBQkNGRVwiIH0pXG4gICk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2ljb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 2);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(/*! ./icons */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbar__ = __webpack_require__(/*! ./toolbar */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit__ = __webpack_require__(/*! ./edit */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view__ = __webpack_require__(/*! ./view */ 6);\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n/**\n * BLOCK: figma-embed-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$element = wp.element,\n    useState = _wp$element.useState,\n    Fragment = _wp$element.Fragment;\n\n\nregisterBlockType('cgb/block-figma-embed-block', {\n\ttitle: __('Figma'),\n\ticon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__icons__[\"a\" /* FigmaIcon */], null),\n\tcategory: 'embed',\n\tkeywords: [__('Figma'), __('Design'), __('Image')],\n\n\tattributes: {\n\t\turl: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\tvar className = props.className,\n\t\t    url = props.attributes.url,\n\t\t    setAttributes = props.setAttributes;\n\n\t\tvar _useState = useState(false),\n\t\t    _useState2 = _slicedToArray(_useState, 2),\n\t\t    isEditMode = _useState2[0],\n\t\t    setEditMode = _useState2[1];\n\n\t\t/**\n   * @param {string} newURL The new URL */\n\n\n\t\tvar handleURLChange = function handleURLChange(newURL) {\n\t\t\tsetEditMode(false);\n\t\t\tsetAttributes({ url: newURL });\n\t\t};\n\n\t\tvar handleEditModeChange = function handleEditModeChange() {\n\t\t\tconsole.log('change mode');\n\t\t\tsetEditMode(function (state) {\n\t\t\t\treturn !state;\n\t\t\t});\n\t\t};\n\n\t\tvar toolbar = wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__toolbar__[\"a\" /* BlockToolbar */], { isEditMode: isEditMode, onEditModeToggle: handleEditModeChange });\n\n\t\tif (isEditMode || !url) {\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\ttoolbar,\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__edit__[\"a\" /* Edit */], { url: url, onURLChange: handleURLChange, className: className })\n\t\t\t);\n\t\t}\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\ttoolbar,\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__view__[\"a\" /* View */], { url: url })\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\tvar className = props.className,\n\t\t    url = props.attributes.url;\n\n\t\treturn wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__view__[\"a\" /* View */], { url: url, className: className });\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxuLyoqXG4gKiBCTE9DSzogZmlnbWEtZW1iZWQtYmxvY2tcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0IHsgRmlnbWFJY29uIH0gZnJvbSAnLi9pY29ucyc7XG5pbXBvcnQgeyBCbG9ja1Rvb2xiYXIgfSBmcm9tICcuL3Rvb2xiYXInO1xuaW1wb3J0IHsgRWRpdCB9IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcblxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkZWxlbWVudCA9IHdwLmVsZW1lbnQsXG4gICAgdXNlU3RhdGUgPSBfd3AkZWxlbWVudC51c2VTdGF0ZSxcbiAgICBGcmFnbWVudCA9IF93cCRlbGVtZW50LkZyYWdtZW50O1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stZmlnbWEtZW1iZWQtYmxvY2snLCB7XG5cdHRpdGxlOiBfXygnRmlnbWEnKSxcblx0aWNvbjogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEZpZ21hSWNvbiwgbnVsbCksXG5cdGNhdGVnb3J5OiAnZW1iZWQnLFxuXHRrZXl3b3JkczogW19fKCdGaWdtYScpLCBfXygnRGVzaWduJyksIF9fKCdJbWFnZScpXSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH1cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgdXJsID0gcHJvcHMuYXR0cmlidXRlcy51cmwsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cdFx0dmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcblx0XHQgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG5cdFx0ICAgIGlzRWRpdE1vZGUgPSBfdXNlU3RhdGUyWzBdLFxuXHRcdCAgICBzZXRFZGl0TW9kZSA9IF91c2VTdGF0ZTJbMV07XG5cblx0XHQvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1VSTCBUaGUgbmV3IFVSTCAqL1xuXG5cblx0XHR2YXIgaGFuZGxlVVJMQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlVVJMQ2hhbmdlKG5ld1VSTCkge1xuXHRcdFx0c2V0RWRpdE1vZGUoZmFsc2UpO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IHVybDogbmV3VVJMIH0pO1xuXHRcdH07XG5cblx0XHR2YXIgaGFuZGxlRWRpdE1vZGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVFZGl0TW9kZUNoYW5nZSgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdjaGFuZ2UgbW9kZScpO1xuXHRcdFx0c2V0RWRpdE1vZGUoZnVuY3Rpb24gKHN0YXRlKSB7XG5cdFx0XHRcdHJldHVybiAhc3RhdGU7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIHRvb2xiYXIgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tUb29sYmFyLCB7IGlzRWRpdE1vZGU6IGlzRWRpdE1vZGUsIG9uRWRpdE1vZGVUb2dnbGU6IGhhbmRsZUVkaXRNb2RlQ2hhbmdlIH0pO1xuXG5cdFx0aWYgKGlzRWRpdE1vZGUgfHwgIXVybCkge1xuXHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHRvb2xiYXIsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChFZGl0LCB7IHVybDogdXJsLCBvblVSTENoYW5nZTogaGFuZGxlVVJMQ2hhbmdlLCBjbGFzc05hbWU6IGNsYXNzTmFtZSB9KVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEZyYWdtZW50LFxuXHRcdFx0bnVsbCxcblx0XHRcdHRvb2xiYXIsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVmlldywgeyB1cmw6IHVybCB9KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG5cdFx0ICAgIHVybCA9IHByb3BzLmF0dHJpYnV0ZXMudXJsO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChWaWV3LCB7IHVybDogdXJsLCBjbGFzc05hbWU6IGNsYXNzTmFtZSB9KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*********************************!*\
  !*** ./src/block/edit/index.js ***!
  \*********************************/
/*! exports provided: Edit */
/*! exports used: Edit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Edit; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(/*! ../icons */ 0);\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar __ = wp.i18n.__;\nvar useState = wp.element.useState;\nvar _wp$components = wp.components,\n    Placeholder = _wp$components.Placeholder,\n    TextControl = _wp$components.TextControl,\n    Button = _wp$components.Button;\n\n\n\nvar Edit = function Edit(props) {\n\tvar className = props.className,\n\t    url = props.url,\n\t    onURLChange = props.onURLChange;\n\n\tvar _useState = useState(url),\n\t    _useState2 = _slicedToArray(_useState, 2),\n\t    value = _useState2[0],\n\t    setValue = _useState2[1];\n\n\tvar handleURLChange = function handleURLChange(value) {\n\t\tsetValue(value);\n\t};\n\n\tvar handleURLSave = function handleURLSave() {\n\t\tonURLChange(value);\n\t};\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{ className: className },\n\t\twp.element.createElement(\n\t\t\tPlaceholder,\n\t\t\t{\n\t\t\t\ticon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__icons__[\"a\" /* FigmaIcon */], { className: 'figma-embed:placeholder-logo' }),\n\t\t\t\tlabel: __('Figma Embed'),\n\t\t\t\tinstructions: __('Embed a figma frame into your post or page')\n\t\t\t},\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tlabel: __('Paste link here:'),\n\t\t\t\tvalue: value,\n\t\t\t\tonChange: handleURLChange\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\tButton,\n\t\t\t\t{ isDefault: true, onClick: handleURLSave },\n\t\t\t\t'Save'\n\t\t\t)\n\t\t)\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0L2luZGV4LmpzPzdkYjEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHVzZVN0YXRlID0gd3AuZWxlbWVudC51c2VTdGF0ZTtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGxhY2Vob2xkZXIgPSBfd3AkY29tcG9uZW50cy5QbGFjZWhvbGRlcixcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sLFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbjtcblxuaW1wb3J0IHsgRmlnbWFJY29uIH0gZnJvbSAnLi4vaWNvbnMnO1xuXG5leHBvcnQgdmFyIEVkaXQgPSBmdW5jdGlvbiBFZGl0KHByb3BzKSB7XG5cdHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG5cdCAgICB1cmwgPSBwcm9wcy51cmwsXG5cdCAgICBvblVSTENoYW5nZSA9IHByb3BzLm9uVVJMQ2hhbmdlO1xuXG5cdHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh1cmwpLFxuXHQgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG5cdCAgICB2YWx1ZSA9IF91c2VTdGF0ZTJbMF0sXG5cdCAgICBzZXRWYWx1ZSA9IF91c2VTdGF0ZTJbMV07XG5cblx0dmFyIGhhbmRsZVVSTENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVVSTENoYW5nZSh2YWx1ZSkge1xuXHRcdHNldFZhbHVlKHZhbHVlKTtcblx0fTtcblxuXHR2YXIgaGFuZGxlVVJMU2F2ZSA9IGZ1bmN0aW9uIGhhbmRsZVVSTFNhdmUoKSB7XG5cdFx0b25VUkxDaGFuZ2UodmFsdWUpO1xuXHR9O1xuXG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0J2RpdicsXG5cdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFBsYWNlaG9sZGVyLFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRmlnbWFJY29uLCB7IGNsYXNzTmFtZTogJ2ZpZ21hLWVtYmVkOnBsYWNlaG9sZGVyLWxvZ28nIH0pLFxuXHRcdFx0XHRsYWJlbDogX18oJ0ZpZ21hIEVtYmVkJyksXG5cdFx0XHRcdGluc3RydWN0aW9uczogX18oJ0VtYmVkIGEgZmlnbWEgZnJhbWUgaW50byB5b3VyIHBvc3Qgb3IgcGFnZScpXG5cdFx0XHR9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdGxhYmVsOiBfXygnUGFzdGUgbGluayBoZXJlOicpLFxuXHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdG9uQ2hhbmdlOiBoYW5kbGVVUkxDaGFuZ2Vcblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdHsgaXNEZWZhdWx0OiB0cnVlLCBvbkNsaWNrOiBoYW5kbGVVUkxTYXZlIH0sXG5cdFx0XHRcdCdTYXZlJ1xuXHRcdFx0KVxuXHRcdClcblx0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*********************************!*\
  !*** ./src/block/view/index.js ***!
  \*********************************/
/*! exports provided: View */
/*! exports used: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return View; });\n\nvar View = function View(props) {\n\tvar className = props.className,\n\t    url = props.url;\n\n\tvar embedURL = 'https://www.figma.com/embed?embed_host=share&url=' + encodeURIComponent(url);\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{ className: className },\n\t\twp.element.createElement('iframe', {\n\t\t\tstyle: { border: 'none', pointerEvents: 'none' },\n\t\t\twidth: '800',\n\t\t\theight: '450',\n\t\t\tsrc: embedURL,\n\t\t\tallowFullScreen: true,\n\t\t\ttitle: 'A figma file' /* TODO: figure out something more accessible */\n\t\t})\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay92aWV3L2luZGV4LmpzP2Q5OGQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgdmFyIFZpZXcgPSBmdW5jdGlvbiBWaWV3KHByb3BzKSB7XG5cdHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG5cdCAgICB1cmwgPSBwcm9wcy51cmw7XG5cblx0dmFyIGVtYmVkVVJMID0gJ2h0dHBzOi8vd3d3LmZpZ21hLmNvbS9lbWJlZD9lbWJlZF9ob3N0PXNoYXJlJnVybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVybCk7XG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0J2RpdicsXG5cdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge1xuXHRcdFx0c3R5bGU6IHsgYm9yZGVyOiAnbm9uZScsIHBvaW50ZXJFdmVudHM6ICdub25lJyB9LFxuXHRcdFx0d2lkdGg6ICc4MDAnLFxuXHRcdFx0aGVpZ2h0OiAnNDUwJyxcblx0XHRcdHNyYzogZW1iZWRVUkwsXG5cdFx0XHRhbGxvd0Z1bGxTY3JlZW46IHRydWUsXG5cdFx0XHR0aXRsZTogJ0EgZmlnbWEgZmlsZScgLyogVE9ETzogZmlndXJlIG91dCBzb21ldGhpbmcgbW9yZSBhY2Nlc3NpYmxlICovXG5cdFx0fSlcblx0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svdmlldy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!******************************!*\
  !*** ./src/block/toolbar.js ***!
  \******************************/
/*! exports provided: BlockToolbar */
/*! exports used: BlockToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BlockToolbar; });\nvar __ = wp.i18n.__;\nvar BlockControls = wp.editor.BlockControls;\nvar _wp$components = wp.components,\n    Toolbar = _wp$components.Toolbar,\n    ToolbarButton = _wp$components.ToolbarButton;\n\n\nvar BlockToolbar = function BlockToolbar(props) {\n\tvar isEditMode = props.isEditMode,\n\t    onEditModeToggle = props.onEditModeToggle;\n\n\treturn wp.element.createElement(\n\t\tBlockControls,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tToolbar,\n\t\t\tnull,\n\t\t\twp.element.createElement(ToolbarButton, {\n\t\t\t\ticon: \"edit\",\n\t\t\t\tlabel: __('Change url'),\n\t\t\t\tisActive: isEditMode,\n\t\t\t\tonClick: onEditModeToggle\n\t\t\t})\n\t\t)\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay90b29sYmFyLmpzPzdlMmIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBCbG9ja0NvbnRyb2xzID0gd3AuZWRpdG9yLkJsb2NrQ29udHJvbHM7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFRvb2xiYXIgPSBfd3AkY29tcG9uZW50cy5Ub29sYmFyLFxuICAgIFRvb2xiYXJCdXR0b24gPSBfd3AkY29tcG9uZW50cy5Ub29sYmFyQnV0dG9uO1xuXG5cbmV4cG9ydCB2YXIgQmxvY2tUb29sYmFyID0gZnVuY3Rpb24gQmxvY2tUb29sYmFyKHByb3BzKSB7XG5cdHZhciBpc0VkaXRNb2RlID0gcHJvcHMuaXNFZGl0TW9kZSxcblx0ICAgIG9uRWRpdE1vZGVUb2dnbGUgPSBwcm9wcy5vbkVkaXRNb2RlVG9nZ2xlO1xuXG5cdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0QmxvY2tDb250cm9scyxcblx0XHRudWxsLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFRvb2xiYXIsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcblx0XHRcdFx0aWNvbjogXCJlZGl0XCIsXG5cdFx0XHRcdGxhYmVsOiBfXygnQ2hhbmdlIHVybCcpLFxuXHRcdFx0XHRpc0FjdGl2ZTogaXNFZGl0TW9kZSxcblx0XHRcdFx0b25DbGljazogb25FZGl0TW9kZVRvZ2dsZVxuXHRcdFx0fSlcblx0XHQpXG5cdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL3Rvb2xiYXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);