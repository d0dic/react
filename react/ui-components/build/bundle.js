/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/StyledTest/style.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/StyledTest/style.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n  padding: 15px;\\n}\\n\\n.text {\\n  color: rgb(245, 69, 69);\\n  padding: 0;\\n  margin: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ui-components/./src/components/StyledTest/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ui-components/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ui-components/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/StyledTest/style.css":
/*!*********************************************!*\
  !*** ./src/components/StyledTest/style.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/StyledTest/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ui-components/./src/components/StyledTest/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/StyledTest/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/StyledTest/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/components/StyledTest/style.css\");\n\n\nvar StyledTest = function () {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"container\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", { className: \"text\" }, \"Styled UI-Component.TS\")));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledTest);\n\n\n//# sourceURL=webpack://ui-components/./src/components/StyledTest/index.tsx?");

/***/ }),

/***/ "./src/components/Test.tsx":
/*!*********************************!*\
  !*** ./src/components/Test.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_ts_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/ts-icon.svg */ \"./src/assets/ts-icon.svg\");\n/* harmony import */ var _assets_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/data.json */ \"./src/assets/data.json\");\n\n\n\nvar Test = function () {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { style: { display: 'flex', alignItems: 'center' } },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", { style: { padding: 10 }, src: _assets_ts_icon_svg__WEBPACK_IMPORTED_MODULE_1__, alt: \"TS Logo\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", { style: { margin: 0 } }, \"UI-Component.TS\")),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null,\n            \"by @\",\n            _assets_data_json__WEBPACK_IMPORTED_MODULE_2__.name)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);\n\n\n//# sourceURL=webpack://ui-components/./src/components/Test.tsx?");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTest\": () => (/* reexport safe */ _StyledTest__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Test\": () => (/* reexport safe */ _Test__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Test */ \"./src/components/Test.tsx\");\n/* harmony import */ var _StyledTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyledTest */ \"./src/components/StyledTest/index.tsx\");\n\n\n\n\n//# sourceURL=webpack://ui-components/./src/components/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTest\": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.StyledTest),\n/* harmony export */   \"Test\": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Test)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components/index.ts\");\n\n\n\n//# sourceURL=webpack://ui-components/./src/index.ts?");

/***/ }),

/***/ "./src/assets/ts-icon.svg":
/*!********************************!*\
  !*** ./src/assets/ts-icon.svg ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxsaW5lYXJHcmFkaWVudCBpZD0iYXRtYWZ1YTg3R0FZLVEzRFZVdXdnYSIgeDE9IjYiIHgyPSI0MiIgeTE9IjI0IiB5Mj0iMjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwZDYxYTkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxNjUyOGMiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjYXRtYWZ1YTg3R0FZLVEzRFZVdXdnYSkiIGQ9Ik00MCw2SDhDNi44OTUsNiw2LDYuODk1LDYsOHYzMmMwLDEuMTA1LDAuODk1LDIsMiwyaDMyYzEuMTA1LDAsMi0wLjg5NSwyLTJWOCBDNDIsNi44OTUsNDEuMTA1LDYsNDAsNnoiLz48cGF0aCBkPSJNMzguODE5LDMwLjYwNmMtMC44MTQtMS4wNjUtMS44OTktMS42ODMtMi45NTEtMi4xOTFjLTAuMzE5LTAuMTU0LTAuNjM5LTAuMzA1LTAuOTU5LTAuNDU2CWMtMC42NjUtMC4zMTMtMS4zNTMtMC42MzctMi4wMDItMC45ODNjLTAuNDg1LTAuMjU5LTAuMzgyLTAuNTA5LTAuMzI3LTAuNjQ0YzAuMDUyLTAuMTI3LDAuMjY0LTAuMjE2LDAuNTE2LTAuMjE2CWMwLjA3NSwwLDAuMTUyLDAuMDA4LDAuMjI4LDAuMDIyYzAuMjg0LDAuMDUzLDAuODE2LDAuNTA3LDEuMDk0LDAuOTMzbDAuMjcyLDAuNDE2bDAuMjcxLDAuNDE2bDAuNDE4LTAuMjY5bDAuNDE4LTAuMjY5CWMwLjA4Mi0wLjA1MywyLjAyNS0xLjMwMiwyLjc1OS0xLjgzNGwwLjMwNC0wLjIybDAuMzA0LTAuMjJsLTAuMTI2LTAuMzUzbC0wLjEyNi0wLjM1M2MtMC4wNDktMC4xMzgtMS4yNjQtMy4zOC02LjIyMS0zLjM4aC0wLjAwNgljLTEuNjExLDAuMDQyLTIuOTcyLDAuNjAzLTQuMDY2LDEuNjY5Yy0wLjIzLDAuMjI1LTAuNDM0LDAuNDc2LTAuNjE3LDAuNzQ1VjIydi0wLjVWMjFoLTAuNUgyN0gxNGgtMC41SDEzdjAuNVYyMnYzLjAzNHYwLjV2MC41CWgwLjVIMTRoMy45NzJ2MTIuOTM4djAuNXYwLjVoMC41aDAuNWgyLjk5M2gwLjQ5OGgwLjQ5OGwwLjAwMi0wLjQ5OGwwLjAwMi0wLjQ5OGwwLjA0OS0xMi45NDJIMjdoMC4wNzQJYy0wLjAyMywwLjIzOC0wLjAzOCwwLjQ3OS0wLjAzMywwLjcyM2MwLjAzMSwxLjU3MywwLjY2NCwzLjAyOSwxLjczNywzLjk5NGMwLjcyNiwwLjY1MywxLjU2NSwxLjExNCwyLjM3NywxLjU2bDAuMjE0LDAuMTE4CWMwLjU0MSwwLjI5OSwxLjA5NiwwLjU2MSwxLjYzMiwwLjgxNWMwLjQyNiwwLjIwMiwwLjg0MSwwLjM5OCwxLjI0NywwLjYxMWMwLjE1MSwwLjA3OSwwLjIxMSwwLjE4MywwLjIwNSwwLjM1OAljLTAuMDA3LDAuMjM2LTAuMDk5LDAuMzY1LTAuMzI2LDAuNDYxYy0wLjM0OCwwLjE0Ny0wLjY4NywwLjIyMS0xLjAwOSwwLjIyMWMtMC40ODQsMC0wLjk1NC0wLjE3MS0xLjM5OS0wLjUwOQljLTAuMjM4LTAuMTgxLTAuNDcxLTAuNDU1LTAuNzE5LTAuNzQ2Yy0wLjE0MS0wLjE2NS0wLjI4NC0wLjMzMi0wLjQzNi0wLjQ5N2wtMC4yNzMtMC4yOTRsLTAuMjczLTAuMjk0bC0wLjM0NiwwLjIwMmwtMC4zNDYsMC4yMDIJYy0wLjg2OSwwLjUwNy0yLjg0NCwxLjY5Ni0yLjg0NCwxLjY5NmwtMC40MjIsMC4yNTRsLTAuNDIyLDAuMjU0bDAuMjQ4LDAuNDI2bDAuMjQ4LDAuNDI2YzAuNzEzLDEuMjIzLDEuNzExLDIuMjg3LDIuNjcxLDIuODQ4CWMxLjMzMSwwLjc3OCwyLjc4NSwxLjE3Miw0LjMyMiwxLjE3MmMwLjgzNywwLDEuNzE1LTAuMTE4LDIuNjEtMC4zNWMxLjkzMi0wLjUwMSwzLjMzMi0xLjc1MSwzLjk0Mi0zLjUyCUM0MC4zMjEsMzQuMzExLDM5Ljk4MywzMi4xMjgsMzguODE5LDMwLjYwNnoiIG9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0zMi42OSwyMS41MDVoLTAuMDA2bC0wLjAwNywwYy0xLjQ2MSwwLjAzOC0yLjcwOSwwLjU1Mi0zLjcxLDEuNTI3Yy0wLjkzNCwwLjkxMS0xLjQ1NCwyLjI2NC0xLjQyNSwzLjcxNSBjMC4wMjksMS40MzYsMC42MDEsMi43NiwxLjU3MSwzLjYzM2MwLjY4MywwLjYxNCwxLjQ5NywxLjA2MiwyLjI4NCwxLjQ5NGwwLjIxNCwwLjExOGMwLjUyOCwwLjI5MSwxLjA3NSwwLjU1MSwxLjYwNSwwLjgwMiBjMC40MjUsMC4yMDEsMC44NSwwLjQwMiwxLjI2NSwwLjYyYzAuMzIxLDAuMTY4LDAuNDg1LDAuNDUxLDAuNDczLDAuODE3Yy0wLjAxNCwwLjQzLTAuMjI2LDAuNzM1LTAuNjMxLDAuOTA2IGMtMC40MSwwLjE3My0wLjgxNCwwLjI2LTEuMjAzLDAuMjZjLTAuNTk1LDAtMS4xNjgtMC4yMDYtMS43MDItMC42MTFjLTAuMjgxLTAuMjEzLTAuNTMyLTAuNTA4LTAuNzk3LTAuODIgYy0wLjEzNi0wLjE1OS0wLjI3NC0wLjMyMi0wLjQyMi0wLjQ4MWwtMC4yNzMtMC4yOTRsLTAuMzQ2LDAuMjAyYy0wLjg2NywwLjUwNi0yLjgzOCwxLjY5My0yLjgzOCwxLjY5M2wtMC40MjIsMC4yNTRsMC4yNDgsMC40MjYgYzAuNjcxLDEuMTUyLDEuNjAyLDIuMTQ5LDIuNDkxLDIuNjY4YzEuMjU0LDAuNzMyLDIuNjIzLDEuMTA0LDQuMDcsMS4xMDRjMC43OTUsMCwxLjYzLTAuMTEyLDIuNDg0LTAuMzM0IGMxLjc2NC0wLjQ1OCwzLjA0MS0xLjU5NCwzLjU5NS0zLjE5OWMwLjU4Ny0xLjcwMiwwLjI3OS0zLjcwMS0wLjc4Ni01LjA5NGMtMC43NS0wLjk4Mi0xLjc3NS0xLjU2My0yLjc3MS0yLjA0NSBjLTAuMzE3LTAuMTUzLTAuNjM2LTAuMzA0LTAuOTU1LTAuNDU0Yy0wLjY3MS0wLjMxNi0xLjM2NS0wLjY0My0yLjAyNS0wLjk5NWMtMC41Ny0wLjMwNC0wLjc2Ny0wLjc1Ni0wLjU1NS0xLjI3NCBjMC4xMzMtMC4zMjUsMC41MDgtMC41MjcsMC45NzktMC41MjdjMC4xMDUsMCwwLjIxMywwLjAxLDAuMzIxLDAuMDMxYzAuNDcxLDAuMDg4LDEuMTA0LDAuNjY3LDEuNDIsMS4xNTJsMC4yNzEsMC40MTYgbDAuNDE4LTAuMjY5YzAuMDgyLTAuMDUzLDIuMDE5LTEuMjk5LDIuNzM3LTEuODE4bDAuMzA0LTAuMjJsLTAuMTI2LTAuMzUzQzM4LjM5NiwyNC40MjksMzcuMjk5LDIxLjUwNSwzMi42OSwyMS41MDUgTDMyLjY5LDIxLjUwNXoiIG9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0yNy41LDIxLjVIMjdIMTRoLTAuNVYyMnYzLjAzNHYwLjVIMTRoNC40NzJ2MTMuNDM4djAuNWgwLjVoMi45OTNoMC40OThsMC4wMDItMC40OThsMC4wNTEtMTMuNDRIMjdoMC41di0wLjVWMjJWMjEuNSBMMjcuNSwyMS41eiIgb3BhY2l0eT0iLjA1Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI5LjgzMiwzMy44MjRjMC40NSwwLjQ4NSwwLjgwOSwwLjk5OCwxLjI4NCwxLjM1OWMxLjAzMSwwLjc4NCwyLjE5NywwLjkyMSwzLjQwMSwwLjQxMyBjMC41NzktMC4yNDQsMC45MTctMC43MTYsMC45MzctMS4zNWMwLjAxOC0wLjU2LTAuMjUyLTEuMDE5LTAuNzQxLTEuMjc2Yy0wLjk0Mi0wLjQ5NC0xLjkzLTAuOTAzLTIuODYxLTEuNDE3IGMtMC44MzQtMC40Ni0xLjcwNS0wLjkxNi0yLjQwNS0xLjU0NmMtMS44NTUtMS42Ny0xLjg1MS00Ljk0Mi0wLjEzMi02LjYxN2MwLjkzNS0wLjkxMSwyLjA2NC0xLjM1MSwzLjM3NC0xLjM4NSBjNC4zMSwwLDUuMjc5LDIuNzE2LDUuMjc5LDIuNzE2Yy0wLjcxNSwwLjUxNy0yLjcxNCwxLjgwMy0yLjcxNCwxLjgwM2MtMC4zNTgtMC41NDktMS4wOS0xLjI0Ni0xLjc0Ny0xLjM3IGMtMC44MjYtMC4xNTUtMS41OTMsMC4xNTktMS44NTUsMC43OThjLTAuMzAyLDAuNzM3LTAuMDQsMS40NjYsMC43ODIsMS45MDVjMC45NzksMC41MjIsMS45OTcsMC45NzMsMi45OTcsMS40NTcgYzAuOTgsMC40NzQsMS45MTgsMS4wMTgsMi41OTIsMS44OTljMS43MDQsMi4yMjksMS4zNjUsNi40OTQtMi41MzcsNy41MDZjLTIuMTMzLDAuNTUzLTQuMjE4LDAuNDI3LTYuMTc3LTAuNzE4IGMtMC45MjMtMC41MzktMS43ODMtMS41ODEtMi4zMTEtMi40ODhDMjcsMzUuNTEzLDI4Ljk2NywzNC4zMjksMjkuODMyLDMzLjgyNHoiLz48cG9seWdvbiBmaWxsPSIjZmZmIiBwb2ludHM9IjE0LDIyIDE0LDI1LjAzNCAxOC45NzIsMjUuMDM0IDE4Ljk3MiwzOC45NzIgMjEuOTY1LDM4Ljk3MiAyMi4wMTgsMjUuMDM0IDI3LDI1LjAzNCAyNywyMiIvPjwvc3ZnPg==\";\n\n//# sourceURL=webpack://ui-components/./src/assets/ts-icon.svg?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "./src/assets/data.json":
/*!******************************!*\
  !*** ./src/assets/data.json ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"name\":\"Milos Dodic\"}');\n\n//# sourceURL=webpack://ui-components/./src/assets/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});