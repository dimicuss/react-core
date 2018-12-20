(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("redux"), require("redux-saga"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "redux", "redux-saga"], factory);
	else if(typeof exports === 'object')
		exports["lib/createStore/index.js"] = factory(require("lodash"), require("redux"), require("redux-saga"));
	else
		root["lib/createStore/index.js"] = factory(root[undefined], root[undefined], root[undefined]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_redux__, __WEBPACK_EXTERNAL_MODULE_redux_saga__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/createStore/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/createStore/index.js":
/*!**************************************!*\
  !*** ./src/lib/createStore/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = createStore;\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _reduxSaga = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n\nvar _reduxSaga2 = _interopRequireDefault(_reduxSaga);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar sagaMiddleware = (0, _reduxSaga2.default)();\n\nfunction createStore(connectors, middlewares) {\n  var initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var store = (0, _redux.createStore)((0, _lodash.flow)(connectors)(_lodash.identity), initialState, _redux.applyMiddleware.apply(undefined, [sagaMiddleware].concat(_toConsumableArray(middlewares))));\n\n  store.runSaga = sagaMiddleware.run;\n  store.injectedReducers = {};\n  store.injectedSagas = {};\n\n  return store;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createStore/index.js?");

/***/ }),

/***/ "lodash":
/*!**************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22lodash%22,%22commonjs2%22:%22lodash%22,%22amd%22:%22lodash%22%7D?");

/***/ }),

/***/ "redux":
/*!***********************************************************************!*\
  !*** external {"commonjs":"redux","commonjs2":"redux","amd":"redux"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22redux%22,%22commonjs2%22:%22redux%22,%22amd%22:%22redux%22%7D?");

/***/ }),

/***/ "redux-saga":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"redux-saga","commonjs2":"redux-saga","amd":"redux-saga"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_redux_saga__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22redux-saga%22,%22commonjs2%22:%22redux-saga%22,%22amd%22:%22redux-saga%22%7D?");

/***/ })

/******/ });
});