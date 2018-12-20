(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("invariant"), require("lodash"), require("react"), require("redux"));
	else if(typeof define === 'function' && define.amd)
		define(["invariant", "lodash", "react", "redux"], factory);
	else if(typeof exports === 'object')
		exports["lib/createReducerInjector/index.js"] = factory(require("invariant"), require("lodash"), require("react"), require("redux"));
	else
		root["lib/createReducerInjector/index.js"] = factory(root[undefined], root[undefined], root[undefined], root[undefined]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_invariant__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_redux__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/createReducerInjector/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/createReducerInjector/index.js":
/*!************************************************!*\
  !*** ./src/lib/createReducerInjector/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _invariant = __webpack_require__(/*! invariant */ \"invariant\");\n\nvar _invariant2 = _interopRequireDefault(_invariant);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction createReducerInjector(store, _ref, Descendant) {\n  var reducerName = _ref.reducerName,\n      reducer = _ref.reducer;\n\n  var ReducerInjector = function (_React$PureComponent) {\n    _inherits(ReducerInjector, _React$PureComponent);\n\n    function ReducerInjector() {\n      _classCallCheck(this, ReducerInjector);\n\n      return _possibleConstructorReturn(this, (ReducerInjector.__proto__ || Object.getPrototypeOf(ReducerInjector)).apply(this, arguments));\n    }\n\n    _createClass(ReducerInjector, [{\n      key: 'componentWillMount',\n      value: function componentWillMount() {\n        (0, _invariant2.default)((0, _lodash.isString)(reducerName) && !(0, _lodash.isEmpty)(reducerName) && (0, _lodash.isFunction)(reducer), '(app/utils...) injectReducer: Expected `reducer` to be a reducer function');\n\n        if (Reflect.has(store.injectedReducers, reducerName) && store.injectedReducers[reducerName] === reducer) return;\n\n        store.injectedReducers[reducerName] = reducer; // eslint-disable-line no-param-reassign\n        store.replaceReducer((0, _redux.combineReducers)(store.injectedReducers));\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        return _react2.default.createElement(Descendant, this.props);\n      }\n    }]);\n\n    return ReducerInjector;\n  }(_react2.default.PureComponent);\n\n  return ReducerInjector;\n}\n\nexports.default = (0, _lodash.curry)(createReducerInjector);\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createReducerInjector/index.js?");

/***/ }),

/***/ "invariant":
/*!***********************************************************************************!*\
  !*** external {"commonjs":"invariant","commonjs2":"invariant","amd":"invariant"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_invariant__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22invariant%22,%22commonjs2%22:%22invariant%22,%22amd%22:%22invariant%22%7D?");

/***/ }),

/***/ "lodash":
/*!**************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22lodash%22,%22commonjs2%22:%22lodash%22,%22amd%22:%22lodash%22%7D?");

/***/ }),

/***/ "react":
/*!***********************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }),

/***/ "redux":
/*!***********************************************************************!*\
  !*** external {"commonjs":"redux","commonjs2":"redux","amd":"redux"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22redux%22,%22commonjs2%22:%22redux%22,%22amd%22:%22redux%22%7D?");

/***/ })

/******/ });
});