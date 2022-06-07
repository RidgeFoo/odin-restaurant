/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg.jpeg */ \"./src/images/bg.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --font-family: \\\"Rubik\\\", sans-serif;\\n  --color-dark: rgb(28, 33, 25);\\n  --color-nav: rgb(255, 235, 0);\\n  --color-divider: rgb(220, 148, 86);\\n  --bg-dark: var(--color-dark);\\n  font-family: var(--font-family);\\n  color: var(--color-dark);\\n  box-sizing: border-box;\\n  text-transform: uppercase;\\n}\\n\\nbody {\\n  margin: 0;\\n}\\n\\n#content {\\n  height: 100vh;\\n  margin: 0;\\n  display: grid;\\n  grid-template-rows: 15% 80% 5%;\\n}\\n\\nnav {\\n  display: grid;\\n  grid-template-columns: max-content max-content 2fr max-content;\\n  gap: 20px;\\n  align-items: center;\\n  padding: 10px 20px 10px 20px;\\n  background-color: forestgreen;\\n  font-size: 20px;\\n}\\n\\na {\\n  cursor: pointer;\\n}\\n\\na:hover,\\n#logo:hover {\\n  color: red;\\n}\\n\\n#logo {\\n  justify-self: center;\\n  border: 3px var(--color-dark) solid;\\n  padding: 5px;\\n  display: flex;\\n  gap: 10px;\\n  align-items: center;\\n  font-weight: bold;\\n}\\n\\n#logo > img {\\n  height: 50px;\\n}\\n\\nnav > a:last-child {\\n  justify-self: flex-end;\\n}\\n\\nfooter,\\nnav {\\n  background-color: var(--color-nav);\\n}\\n\\nfooter {\\n  display: flex;\\n  padding: 10px 20px 10px 20px;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.background-image {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: center;\\n  filter: invert(20%) sepia(80%) saturate(4167%) hue-rotate(321deg)\\n    brightness(92%) contrast(200%);\\n  position: fixed;\\n  left: 0;\\n  right: 0;\\n  z-index: -1;\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n#burger-image {\\n  height: 300px;\\n}\\n\\n#home {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#hero {\\n  margin: 0;\\n  color: white;\\n  padding-bottom: 20px;\\n  font-size: 32px;\\n  text-align: center;\\n  white-space: pre;\\n}\\n\\n.google-map {\\n  height: 100%;\\n  width: 100%;\\n  border: 0;\\n}\\n\\n#contact {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n}\\n\\n#address {\\n  display: flex;\\n  gap: 20px;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: var(--bg-dark);\\n  color: white;\\n  font-size: 18px;\\n}\\n\\n#address p {\\n  margin: 0;\\n}\\n\\n#address hr,\\n#menu hr {\\n  border: 2px solid var(--color-nav);\\n  width: 60%;\\n}\\n\\n.address-header {\\n  font-size: 32px;\\n}\\n\\n#opening-times {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 15px;\\n}\\n\\n#opening-times p:nth-child(2) {\\n  color: var(--color-nav);\\n  font-weight: bold;\\n  font-size: 24px;\\n}\\n\\n.menu-row {\\n  display: grid;\\n  grid-template-columns: 150px 250px max-content;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 30px;\\n  padding-bottom: 30px;\\n}\\n\\n.category img {\\n  height: 150px;\\n  justify-self: end;\\n}\\n\\n.category h1 {\\n  text-align: center;\\n  color: white;\\n}\\n\\n#menu {\\n  overflow-y: auto;\\n  background-color: var(--bg-dark);\\n  color: white;\\n}\\n\\n#attributions {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 30px;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: var(--bg-dark);\\n  color: white;\\n}\\n\\n#attributions a {\\n  text-decoration: none;\\n  color: white;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/attributions.js":
/*!*****************************!*\
  !*** ./src/attributions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attributions\": () => (/* binding */ attributions)\n/* harmony export */ });\nconst attributions = (function () {\n  const l = [\n    '<a href=\"https://www.flaticon.com/free-icons/burger\">Burger icons created by Freepik - Flaticon</a>',\n    '<a href=\"https://unsplash.com/photos/pu6b4yIlQF4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink\">Photo by Eiliv-Sonas Aceron</a>',\n    '<a href=\"https://unsplash.com/photos/5nvt9BrLaAc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink\">Photo by Eiliv-Sonas Aceron</a>',\n    '<a href=\"https://unsplash.com/photos/ax4RxkKOWxY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink\">Photo by George Cox</a>',\n    '<a href=\"https://unsplash.com/photos/jdfbtFd-4k8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink\">Photo by D Santiagø</a>',\n    '<a href=\"https://unsplash.com/photos/E94j3rMcxlw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink\">Photo by Food Photographer phototastyfood.ru</a>',\n    '<a href=\"https://unsplash.com/photos/14fsLu2qcN8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink\">Photo by Katrin Hauf</a>',\n  ];\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Attributions\";\n  const container = document.createElement(\"div\");\n  container.className = \"main\";\n  container.id = \"attributions\";\n  container.innerHTML = l.join(\"\");\n  container.insertAdjacentElement(\"afterbegin\", title);\n  return container;\n})();\n\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/attributions.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = (function () {\n  function getElements(city, fullAddress) {\n    const container = document.createElement(\"div\");\n    container.className = \"main\";\n    container.id = \"contact\";\n    container.append(getAddressDetails(city, fullAddress), getMap());\n    return container;\n  }\n\n  function getMap() {\n    const container = document.createElement(\"iframe\");\n    container.classList = \"google-map\";\n    container.src =\n      \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.0441417293764!2d-0.16805458423186928!3d51.45734597962693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876059674217c07%3A0xb507dc974c829ef4!2s98%20Northcote%20Rd%2C%20London%20SW11%206QW!5e0!3m2!1sen!2suk!4v1654530357770!5m2!1sen!2suk\";\n    container.setAttribute(\"loading\", \"lazy\");\n    container.setAttribute(\"referrerpolicy\", \"no-referrer-when-downgrade\");\n    container.setAttribute(\"allowfullscreen\", \"\");\n    return container;\n  }\n\n  function getAddressDetails(city, fullAddress) {\n    const container = document.createElement(\"div\");\n    container.id = \"address\";\n\n    const addressHeader = document.createElement(\"p\");\n    const addressFull = document.createElement(\"p\");\n\n    addressHeader.textContent = city;\n    addressHeader.className = \"address-header\";\n    addressFull.textContent = fullAddress;\n\n    container.append(\n      addressHeader,\n      document.createElement(\"hr\"),\n      addressFull,\n      document.createElement(\"hr\"),\n      getOpeningTimes()\n    );\n    return container;\n  }\n\n  function getOpeningTimes() {\n    const container = document.createElement(\"div\");\n    container.id = \"opening-times\";\n    const openingTimesHeader = document.createElement(\"p\");\n    const openingTimes = document.createElement(\"p\");\n    openingTimesHeader.textContent = \"Open Everyday\";\n    openingTimes.textContent = \"12.00PM - 11.00PM\";\n\n    container.append(openingTimesHeader, openingTimes);\n    return container;\n  }\n\n  return getElements;\n})();\n\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _images_beef_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/beef-burger.png */ \"./src/images/beef-burger.png\");\n\n\nconst home = (function () {\n  const container = document.createElement(\"div\");\n  container.id = \"home\";\n  container.className = \"main\";\n\n  const backgroundDiv = document.createElement(\"div\");\n  backgroundDiv.className = \"background-image\";\n\n  const burgerDiv = document.createElement(\"img\");\n  burgerDiv.id = \"burger-image\";\n  burgerDiv.src = _images_beef_burger_png__WEBPACK_IMPORTED_MODULE_0__;\n\n  const heroMessage = document.createElement(\"p\");\n  heroMessage.id = \"hero\";\n  heroMessage.textContent = \"These burgers\\r\\n\" + \"will give you super powers\";\n\n  container.append(backgroundDiv, heroMessage, burgerDiv);\n\n  return container;\n})();\n\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _attributions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributions */ \"./src/attributions.js\");\n\n\n\n\n\n\n\nconst main = (function () {\n  const city = \"London\";\n  const fullAddress = \"98 Northcote Rd, London, SW11 6QW\";\n\n  let pageLoaded = false;\n  const content = document.querySelector(\"#content\");\n\n  function setupPage() {\n    if (!pageLoaded) {\n      const navBar = (0,_page_load__WEBPACK_IMPORTED_MODULE_1__.getNavBar)(\n        () => updateContent(_home__WEBPACK_IMPORTED_MODULE_2__.home),\n        () => updateContent((0,_menu__WEBPACK_IMPORTED_MODULE_4__.menu)()),\n        () => updateContent((0,_contact__WEBPACK_IMPORTED_MODULE_3__.contact)(city, fullAddress))\n      );\n      content.insertAdjacentElement(\"afterbegin\", navBar);\n      content.append(_home__WEBPACK_IMPORTED_MODULE_2__.home);\n      content.insertAdjacentElement(\n        \"beforeend\",\n        (0,_page_load__WEBPACK_IMPORTED_MODULE_1__.getFooter)(fullAddress, () => updateContent(_attributions__WEBPACK_IMPORTED_MODULE_5__.attributions))\n      );\n      pageLoaded = true;\n    }\n  }\n\n  function updateContent(div) {\n    content.querySelector(\".main\").replaceWith(div);\n  }\n\n  setupPage();\n})();\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _images_beef_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/beef-burger.png */ \"./src/images/beef-burger.png\");\n/* harmony import */ var _images_chicken_burger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chicken-burger.png */ \"./src/images/chicken-burger.png\");\n/* harmony import */ var _images_veggie_burger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/veggie-burger.png */ \"./src/images/veggie-burger.png\");\n/* harmony import */ var _images_cola_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/cola.png */ \"./src/images/cola.png\");\n/* harmony import */ var _images_beer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/beer.png */ \"./src/images/beer.png\");\n/* harmony import */ var _images_apple_juice_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/apple-juice.png */ \"./src/images/apple-juice.png\");\n\n\n\n\n\n\n\nconst menuItems = (function () {\n  class Burger {\n    constructor(type, price, image) {\n      this.name = `${type} Burger`;\n      this.price = String(price);\n      this.description = `A classic ${this.name} with a super twist`;\n      this.image = image;\n    }\n  }\n\n  class Drink {\n    constructor(type, price, isAlcoholic, image) {\n      this.name = type;\n      this.price = price;\n      this.isAlcoholic = isAlcoholic;\n      this.description = `${this.name[0].toLowerCase() === \"a\" ? \"An\" : \"A\"} ${\n        this.name\n      } of heroic proportions`;\n      this.image = image;\n    }\n  }\n\n  const menu = {\n    burgers: [\n      new Burger(\"Beef\", 16.75, _images_beef_burger_png__WEBPACK_IMPORTED_MODULE_0__),\n      new Burger(\"Chicken\", 12.5, _images_chicken_burger_png__WEBPACK_IMPORTED_MODULE_1__),\n      new Burger(\"Veggie\", 8.5, _images_veggie_burger_png__WEBPACK_IMPORTED_MODULE_2__),\n    ],\n    drinks: [\n      new Drink(\"Cola\", 3.5, false, _images_cola_png__WEBPACK_IMPORTED_MODULE_3__),\n      new Drink(\"Beer\", 5.95, true, _images_beer_png__WEBPACK_IMPORTED_MODULE_4__),\n      new Drink(\"Apple Juice\", 3.99, false, _images_apple_juice_png__WEBPACK_IMPORTED_MODULE_5__),\n    ],\n  };\n\n  return menu;\n})();\n\nconst menu = (function () {\n  function getElements() {\n    const container = document.createElement(\"div\");\n    container.className = \"main\";\n    container.id = \"menu\";\n\n    const burgers = getMenuCategory(\"burgers\");\n    const drinks = getMenuCategory(\"drinks\");\n\n    container.innerHTML = burgers + \"<hr>\" + drinks;\n\n    return container;\n  }\n\n  function getMenuCategory(category) {\n    let categoryContainer = `\n    <div class=\"category\">\n      <h1>${category}</h1>\n      ${menuItems[category]\n        .map((i) =>\n          getMenuRow(i.name, i.description, i.image, i.price, i.isAlcoholic)\n        )\n        .join(\"\")}\n    </div>`;\n\n    return categoryContainer;\n  }\n\n  function getMenuRow(name, description, image, price, isAlcoholic) {\n    return `\n    <div class=\"menu-row\">\n      <img src=\"${image}\">\n      <div class=\"item-description\">\n        <h2>${name}</h2>\n        <p>${description}</p>\n        ${isAlcoholic ? \"<p>Alcoholic drink</p>\" : \"\"}\n      </div>\n      <div class=\"price\">£${price}</div>\n    </div>\n    `;\n  }\n  return getElements;\n})();\n\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFooter\": () => (/* binding */ getFooter),\n/* harmony export */   \"getNavBar\": () => (/* binding */ getNavBar)\n/* harmony export */ });\n/* harmony import */ var _images_burger_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/burger-icon.png */ \"./src/images/burger-icon.png\");\n\n\nlet getFooter;\nlet getNavBar;\n\nconst nav = (function () {\n  function getNavBar(homeCallbackFn, menuCallbackFn, contactCallbackFn) {\n    let navBar = document.createElement(\"nav\");\n    let home = document.createElement(\"a\");\n    let menu = document.createElement(\"a\");\n    let contact = document.createElement(\"a\");\n\n    home.textContent = \"Home\";\n    menu.textContent = \"Menu\";\n    contact.textContent = \"Contact Us\";\n\n    home.addEventListener(\"click\", homeCallbackFn);\n    menu.addEventListener(\"click\", menuCallbackFn);\n    contact.addEventListener(\"click\", contactCallbackFn);\n\n    navBar.append(home, menu, getLogoContainer(), contact);\n    return navBar;\n  }\n\n  function getLogoContainer() {\n    const logoContainer = document.createElement(\"div\");\n    const divSuper = document.createElement(\"div\");\n    const logo = document.createElement(\"img\");\n    const divBurger = document.createElement(\"div\");\n\n    logoContainer.append(divSuper, logo, divBurger);\n\n    divSuper.textContent = \"Super\";\n    divBurger.textContent = \"Burger\";\n    logo.src = _images_burger_icon_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    logoContainer.id = \"logo\";\n\n    return logoContainer;\n  }\n\n  function getFooter(fullAddress, attributionCallbackFn) {\n    const footer = document.createElement(\"footer\");\n    const address = document.createElement(\"p\");\n    const attributions = document.createElement(\"a\");\n\n    attributions.addEventListener(\"click\", attributionCallbackFn);\n\n    address.textContent = fullAddress;\n    attributions.textContent = \"Photo & Icon Attributions\";\n\n    footer.append(address, attributions);\n\n    return footer;\n  }\n\n  return { getNavBar, getFooter };\n})();\n\ngetNavBar = nav.getNavBar;\ngetFooter = nav.getFooter;\n\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/page-load.js?");

/***/ }),

/***/ "./src/images/apple-juice.png":
/*!************************************!*\
  !*** ./src/images/apple-juice.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a856641c030506abc025.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/apple-juice.png?");

/***/ }),

/***/ "./src/images/beef-burger.png":
/*!************************************!*\
  !*** ./src/images/beef-burger.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0994d2b43f0ec716908.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/beef-burger.png?");

/***/ }),

/***/ "./src/images/beer.png":
/*!*****************************!*\
  !*** ./src/images/beer.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aa84c498fc5a4093a5e2.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/beer.png?");

/***/ }),

/***/ "./src/images/bg.jpeg":
/*!****************************!*\
  !*** ./src/images/bg.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8339046ec3b974dde7ee.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/bg.jpeg?");

/***/ }),

/***/ "./src/images/burger-icon.png":
/*!************************************!*\
  !*** ./src/images/burger-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d0e2abe3c4c578e1c5c.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/burger-icon.png?");

/***/ }),

/***/ "./src/images/chicken-burger.png":
/*!***************************************!*\
  !*** ./src/images/chicken-burger.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6791c1348b6791d93bad.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/chicken-burger.png?");

/***/ }),

/***/ "./src/images/cola.png":
/*!*****************************!*\
  !*** ./src/images/cola.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ac456ae5a3c5bdd6ef1.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/cola.png?");

/***/ }),

/***/ "./src/images/veggie-burger.png":
/*!**************************************!*\
  !*** ./src/images/veggie-burger.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e01d2c32cee0bbc1a11c.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/veggie-burger.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;