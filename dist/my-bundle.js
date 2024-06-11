/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst React = __webpack_require__(/*! react */ \"react\");\nconst {\n  renderToString\n} = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst App = (__webpack_require__(/*! ../src/App */ \"./src/App.tsx\")[\"default\"]);\nconst app = express();\napp.use(express.static('../public'));\n// app.use(express.static(path.join(__dirname, '../public')));\nconsole.log('__dirname:', __dirname);\napp.get('*', (req, res) => {\n  if (req.path.includes('/styles.css') || req.path.includes('/bundle.js')) {\n    return res.sendFile(path.join(__dirname, '../public', req.path));\n  }\n  const appString = renderToString(React.createElement(App));\n  const html = `\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>SSR with React</title>\n        <link rel=\"icon\" href=\"/favicon.ico\" />\n        <link rel=\"stylesheet\" href=\"/styles.css\" />\n        </head>\n        <body>\n        <div id=\"root\">${appString}</div>\n        <script src=\"/bundle.js\"></script>\n      </body>\n    </html>\n  `;\n  res.send(html);\n});\napp.listen(9000, () => {\n  console.log('Server is running on http://localhost:9000');\n});\n\n//# sourceURL=webpack://my-app/./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-app/./src/App.css?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n// import mypic from '../public/mypic.JPG';\n__webpack_require__(/*! ./App.css */ \"./src/App.css\");\nconst App = () => {\n    return /*#__PURE__*/ react_1.default.createElement(\"div\", {\n        className: \"App\"\n    }, /*#__PURE__*/ react_1.default.createElement(\"header\", {\n        className: \"App-header\"\n    }, /*#__PURE__*/ react_1.default.createElement(\"h1\", {\n        className: \"App-title\"\n    }, \"\\u5409\\u7530\\u548C\\u53F8\"), /*#__PURE__*/ react_1.default.createElement(\"p\", {\n        className: \"App-introduction\"\n    }, \"\\u3053\\u3093\\u306B\\u3061\\u306F\")), /*#__PURE__*/ react_1.default.createElement(\"main\", {\n        className: \"App-main\"\n    }, /*#__PURE__*/ react_1.default.createElement(\"section\", {\n        className: \"App-section\"\n    }, /*#__PURE__*/ react_1.default.createElement(\"h2\", null, \"About Me\"), /*#__PURE__*/ react_1.default.createElement(\"p\", null, \"\\u6210\\u8E4A\\u5927\\u5B66\\u7406\\u5DE5\\u5B66\\u90E8\\u30B7\\u30B9\\u30C6\\u30E0\\u30C7\\u30B6\\u30A4\\u30F3\\u5B66\\u79D13\\u5E74(\\u73FE\\u5728\\u4F11\\u5B66\\u4E2D)\")), /*#__PURE__*/ react_1.default.createElement(\"section\", {\n        className: \"App-section\"\n    }, /*#__PURE__*/ react_1.default.createElement(\"h2\", null, \"Projects\"), /*#__PURE__*/ react_1.default.createElement(\"p\", null, \"Here are some of my recent projects:\"), /*#__PURE__*/ react_1.default.createElement(\"ul\", null, /*#__PURE__*/ react_1.default.createElement(\"li\", null, \"Project 1 - A brief description of Project 1.\"), /*#__PURE__*/ react_1.default.createElement(\"li\", null, \"Project 2 - A brief description of Project 2.\"), /*#__PURE__*/ react_1.default.createElement(\"li\", null, \"Project 3 - A brief description of Project 3.\"))), /*#__PURE__*/ react_1.default.createElement(\"section\", {\n        className: \"App-section\"\n    }, /*#__PURE__*/ react_1.default.createElement(\"h2\", null, \"Contact\"), /*#__PURE__*/ react_1.default.createElement(\"p\", null, \"You can reach me at \", /*#__PURE__*/ react_1.default.createElement(\"a\", {\n        href: \"mailto:your.email@example.com\"\n    }, \"ka.yoshida0424@gmail.com\"), \".\"))), /*#__PURE__*/ react_1.default.createElement(\"footer\", {\n        className: \"App-footer\"\n    }, /*#__PURE__*/ react_1.default.createElement(\"p\", null, \"\\xA9 2024 [Your Name]. All rights reserved.\")));\n};\nexports[\"default\"] = App;\n\n\n//# sourceURL=webpack://my-app/./src/App.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;