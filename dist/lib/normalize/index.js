(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["lib/normalize/index.js"] = factory(require("lodash"));
	else
		root["lib/normalize/index.js"] = factory(root[undefined]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/normalize/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/normalize/index.js":
/*!************************************!*\
  !*** ./src/lib/normalize/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  return function () {\n    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    var paths = (0, _lodash.intersectionWith)(collectKeys(config), collectKeys(object), function (a, b) {\n      return a.join() === b.join();\n    });\n\n    var objectCopy = (0, _lodash.cloneDeep)(object);\n    paths.forEach(function (path) {\n      var configFn = (0, _lodash.get)(config, path);\n      var objectValue = (0, _lodash.get)(object, path);\n      (0, _lodash.set)(objectCopy, path, configFn(objectValue));\n    });\n\n    return objectCopy;\n  };\n};\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nfunction collectKeys(object) {\n  var pathsArray = [];\n\n  (function fn(obj) {\n    var foundKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n    var objKeys = (0, _lodash.keys)(obj);\n\n    objKeys.forEach(function (key) {\n      var nextObject = obj[key];\n      var nextFoundKeys = (0, _lodash.concat)(foundKeys, key);\n\n      if ((0, _lodash.isObject)(nextObject) && (0, _lodash.negate)(_lodash.isFunction)(nextObject)) {\n        pathsArray.push(nextFoundKeys);\n        fn(nextObject, nextFoundKeys);\n      } else {\n        pathsArray.push(nextFoundKeys);\n      }\n    });\n  })(object);\n\n  return pathsArray;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/normalize/index.js?");

/***/ }),

/***/ "lodash":
/*!**************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22lodash%22,%22commonjs2%22:%22lodash%22,%22amd%22:%22lodash%22%7D?");

/***/ })

/******/ });
});