(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "react"], factory);
	else if(typeof exports === 'object')
		exports["lib/createSagaInjector/index.js"] = factory(require("lodash"), require("react"));
	else
		root["lib/createSagaInjector/index.js"] = factory(root[undefined], root[undefined]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/createSagaInjector/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/createSagaInjector/index.js":
/*!*********************************************!*\
  !*** ./src/lib/createSagaInjector/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DAEMON = '@@saga-injector/daemon';\nvar ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';\nvar RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';\n\nfunction createSagaInjector(store, _ref, Descendant) {\n  var key = _ref.sagaName,\n      saga = _ref.saga,\n      _ref$sagaMode = _ref.sagaMode,\n      sagaMode = _ref$sagaMode === undefined ? RESTART_ON_REMOUNT : _ref$sagaMode;\n\n  var InjectSaga = function (_React$Component) {\n    _inherits(InjectSaga, _React$Component);\n\n    function InjectSaga() {\n      _classCallCheck(this, InjectSaga);\n\n      return _possibleConstructorReturn(this, (InjectSaga.__proto__ || Object.getPrototypeOf(InjectSaga)).apply(this, arguments));\n    }\n\n    _createClass(InjectSaga, [{\n      key: 'componentWillMount',\n      value: function componentWillMount() {\n        var hasSaga = Reflect.has(store.injectedSagas, key);\n\n        if (!hasSaga || hasSaga && sagaMode !== DAEMON && sagaMode !== ONCE_TILL_UNMOUNT) {\n          store.injectedSagas[key] = { // eslint-disable-line no-param-reassign\n            saga: saga,\n            mode: sagaMode,\n            task: store.runSaga(saga)\n          };\n        }\n      }\n    }, {\n      key: 'componentWillUnmount',\n      value: function componentWillUnmount() {\n        if (Reflect.has(store.injectedSagas, key)) {\n          var descriptor = store.injectedSagas[key];\n          if (descriptor.mode !== DAEMON) {\n            descriptor.task.cancel();\n          }\n        }\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        return _react2.default.createElement(Descendant, this.props);\n      }\n    }]);\n\n    return InjectSaga;\n  }(_react2.default.Component);\n\n  return InjectSaga;\n}\n\nexports.default = (0, _lodash.curry)(createSagaInjector);\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createSagaInjector/index.js?");

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

/***/ })

/******/ });
});