(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("immutable"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["immutable", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["lib/createModel/index.js"] = factory(require("immutable"), require("lodash"));
	else
		root["lib/createModel/index.js"] = factory(root[undefined], root[undefined]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_immutable__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/createModel/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/createModel/index.js":
/*!**************************************!*\
  !*** ./src/lib/createModel/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isObject = exports.isArray = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _createList = __webpack_require__(/*! ./lib/createList */ \"./src/lib/createModel/lib/createList.js\");\n\nvar _createList2 = _interopRequireDefault(_createList);\n\nvar _createRecord = __webpack_require__(/*! ./lib/createRecord */ \"./src/lib/createModel/lib/createRecord.js\");\n\nvar _createRecord2 = _interopRequireDefault(_createRecord);\n\nvar _createSimple = __webpack_require__(/*! ./lib/createSimple */ \"./src/lib/createModel/lib/createSimple.js\");\n\nvar _createSimple2 = _interopRequireDefault(_createSimple);\n\nvar _createListModel = __webpack_require__(/*! ./lib/createListModel */ \"./src/lib/createModel/lib/createListModel.js\");\n\nvar _createListModel2 = _interopRequireDefault(_createListModel);\n\nvar _createRecordModel = __webpack_require__(/*! ./lib/createRecordModel */ \"./src/lib/createModel/lib/createRecordModel.js\");\n\nvar _createRecordModel2 = _interopRequireDefault(_createRecordModel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar isArray = exports.isArray = function isArray(obj) {\n  return (0, _lodash.isPlainObject)(obj) && obj.type === 'array';\n};\nvar isObject = exports.isObject = function isObject(obj) {\n  return (0, _lodash.isPlainObject)(obj) && obj.type === 'object';\n};\n\nvar createModel = (0, _lodash.cond)([[isObject, function (type, additional) {\n  var expansions = additional.expansions,\n      rest = _objectWithoutProperties(additional, ['expansions']);\n\n  var properties = type.properties,\n      entity = type.entity,\n      routeEntity = type.routeEntity;\n\n  var propCreators = (0, _lodash.mapValues)(properties, function (property) {\n    return createModel(property, additional);\n  });\n\n  return (0, _createRecord2.default)(propCreators, type, (0, _createRecordModel2.default)(_extends({}, (0, _lodash.merge)({}, (0, _lodash.get)(expansions, entity, _lodash.stubObject)(rest), (0, _lodash.get)(expansions, routeEntity, _lodash.stubObject)(rest)), {\n    type: type,\n    propCreators: propCreators\n  })));\n}], [isArray, function (type, additional) {\n  var items = type.items;\n\n  var propCreator = createModel(items, additional);\n  var Model = (0, _createListModel2.default)({ propCreator: propCreator });\n  return (0, _createList2.default)(propCreator, type, Model);\n}], [_lodash.stubTrue, function (type) {\n  return (0, _createSimple2.default)(null, type);\n}]]);\n\nexports.default = createModel;\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createModel/index.js?");

/***/ }),

/***/ "./src/lib/createModel/lib/createList.js":
/*!***********************************************!*\
  !*** ./src/lib/createModel/lib/createList.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _handleNil = __webpack_require__(/*! ./handleNil */ \"./src/lib/createModel/lib/handleNil.js\");\n\nvar _handleNil2 = _interopRequireDefault(_handleNil);\n\nvar _createWrapper = __webpack_require__(/*! ./createWrapper */ \"./src/lib/createModel/lib/createWrapper.js\");\n\nvar _createWrapper2 = _interopRequireDefault(_createWrapper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction createList(properties, itemDefinition, type, Model) {\n  return new Model(properties);\n}\n\nexports.default = (0, _lodash.flow)([_handleNil2.default, _createWrapper2.default])(createList);\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createModel/lib/createList.js?");

/***/ }),

/***/ "./src/lib/createModel/lib/createListModel.js":
/*!****************************************************!*\
  !*** ./src/lib/createModel/lib/createListModel.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nexports.default = createListModel;\n\nvar _immutable = __webpack_require__(/*! immutable */ \"immutable\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Сделать прокси\n\n\nfunction createListModel(_ref) {\n  var propCreator = _ref.propCreator;\n\n  function createList(list) {\n    return (0, _immutable.List)(list.map(propCreator));\n  }\n\n  var ListModel = function () {\n    function ListModel() {\n      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      _classCallCheck(this, ListModel);\n\n      if (_immutable.List.isList(list)) {\n        this.list = list;\n      } else if (list instanceof ListModel) {\n        this.list = list.list;\n      } else {\n        this.list = createList(list);\n      }\n    }\n\n    _createClass(ListModel, [{\n      key: 'get',\n      value: function get() {\n        var _list;\n\n        return (_list = this.list).get.apply(_list, arguments);\n      }\n    }, {\n      key: 'toJS',\n      value: function toJS() {\n        return this.list.toJS();\n      }\n    }, {\n      key: 'toArray',\n      value: function toArray() {\n        return this.list.toArray();\n      }\n    }, {\n      key: 'toString',\n      value: function toString() {\n        return JSON.stringify(this.list);\n      }\n    }, {\n      key: 'findIndex',\n      value: function findIndex() {\n        var _list2;\n\n        return (_list2 = this.list).findIndex.apply(_list2, arguments);\n      }\n    }, {\n      key: 'concat',\n      value: function concat() {\n        var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n        return new ListModel(this.list.concat(createList(list)));\n      }\n    }, {\n      key: 'set',\n      value: function set(index, item) {\n        return new ListModel(this.list.set(index, propCreator(item)));\n      }\n    }, {\n      key: 'map',\n      value: function map() {\n        var _list3;\n\n        return new ListModel((_list3 = this.list).map.apply(_list3, arguments));\n      }\n    }, {\n      key: 'filter',\n      value: function filter() {\n        var _list4;\n\n        return new ListModel((_list4 = this.list).filter.apply(_list4, arguments));\n      }\n    }, {\n      key: 'push',\n      value: function push(item) {\n        return new ListModel(this.list.push(propCreator(item)));\n      }\n    }, {\n      key: 'unshift',\n      value: function unshift(item) {\n        return new ListModel(this.list.unshift(propCreator(item)));\n      }\n    }, {\n      key: 'remove',\n      value: function remove() {\n        var _list5;\n\n        return new ListModel((_list5 = this.list).remove.apply(_list5, arguments));\n      }\n    }, {\n      key: 'sort',\n      value: function sort() {\n        var _list6;\n\n        return new ListModel((_list6 = this.list).sort.apply(_list6, arguments));\n      }\n    }, {\n      key: 'first',\n      value: function first() {\n        return this.list.first();\n      }\n    }, {\n      key: 'reduce',\n      value: function reduce() {\n        var _list7;\n\n        return (_list7 = this.list).reduce.apply(_list7, arguments);\n      }\n    }, {\n      key: 'join',\n      value: function join() {\n        var _list8;\n\n        return (_list8 = this.list).join.apply(_list8, arguments);\n      }\n    }, {\n      key: 'size',\n      get: function get() {\n        return this.list.size;\n      }\n    }]);\n\n    return ListModel;\n  }();\n\n  return ListModel;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createModel/lib/createListModel.js?");

/***/ }),

/***/ "./src/lib/createModel/lib/createMapHandler.js":
/*!*****************************************************!*\
  !*** ./src/lib/createModel/lib/createMapHandler.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = createMapNormalizer;\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nfunction collectPaths(object) {\n  var pathsArray = [];\n\n  (function fn(obj) {\n    var foundKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n    var objKeys = (0, _lodash.keys)(obj);\n\n    objKeys.forEach(function (key) {\n      var nextObject = obj[key];\n      var nextFoundKeys = (0, _lodash.concat)(foundKeys, key);\n\n      if ((0, _lodash.isObject)(nextObject) && (0, _lodash.negate)(_lodash.isFunction)(nextObject)) {\n        pathsArray.push(nextFoundKeys);\n        fn(nextObject, nextFoundKeys);\n      } else {\n        pathsArray.push(nextFoundKeys);\n      }\n    });\n  })(object);\n\n  return pathsArray;\n}\n\nfunction createMapNormalizer() {\n  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var paths = collectPaths(config);\n\n  return function normalizeMap() {\n    var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    return paths.reduce(function (acc, path) {\n      var configFn = (0, _lodash.get)(config, path);\n      console.log(acc, path, configFn((0, _lodash.get)(map, path), acc));\n      return _extends({}, acc, (0, _lodash.set)({}, path, configFn((0, _lodash.get)(map, path), acc)));\n    }, map);\n  };\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createModel/lib/createMapHandler.js?");

/***/ }),

/***/ "./src/lib/createModel/lib/createRecord.js":
/*!*************************************************!*\
  !*** ./src/lib/createModel/lib/createRecord.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _handleNil = __webpack_require__(/*! ./handleNil */ \"./src/lib/createModel/lib/handleNil.js\");\n\nvar _handleNil2 = _interopRequireDefault(_handleNil);\n\nvar _createWrapper = __webpack_require__(/*! ./createWrapper */ \"./src/lib/createModel/lib/createWrapper.js\");\n\nvar _createWrapper2 = _interopRequireDefault(_createWrapper);\n\nvar _handleEmptyDefinitions = __webpack_require__(/*! ./handleEmptyDefinitions */ \"./src/lib/createModel/lib/handleEmptyDefinitions.js\");\n\nvar _handleEmptyDefinitions2 = _interopRequireDefault(_handleEmptyDefinitions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction createRecord(properties, propCreators, type, Model) {\n  return new Model(properties);\n}\n\nexports.default = (0, _lodash.flow)([_handleNil2.default, _handleEmptyDefinitions2.default, _createWrapper2.default])(createRecord);\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createModel/lib/createRecord.js?");

/***/ }),

/***/ "./src/lib/createModel/lib/createRecordModel.js":
/*!******************************************************!*\
  !*** ./src/lib/createModel/lib/createRecordModel.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = createEntityModel;\n\nvar _immutable = __webpack_require__(/*! immutable */ \"immutable\");\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _createMapHandler = __webpack_require__(/*! ./createMapHandler */ \"./src/lib/createModel/lib/createMapHandler.js\");\n\nvar _createMapHandler2 = _interopRequireDefault(_createMapHandler);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar stubUndefined = (0, _lodash.constant)(undefined);\n\nfunction createEntityModel(_ref) {\n  var type = _ref.type,\n      _ref$normalizers = _ref.normalizers,\n      normalizers = _ref$normalizers === undefined ? {} : _ref$normalizers,\n      _ref$extenders = _ref.extenders,\n      extenders = _ref$extenders === undefined ? {} : _ref$extenders,\n      _ref$methods = _ref.methods,\n      methods = _ref$methods === undefined ? {} : _ref$methods,\n      name = _ref.name,\n      _ref$propCreators = _ref.propCreators,\n      propCreators = _ref$propCreators === undefined ? {} : _ref$propCreators;\n\n  var possibleFields = _extends({}, (0, _lodash.mapValues)(type.properties, stubUndefined), (0, _lodash.mapValues)(extenders, stubUndefined));\n\n  var RecordInstance = (0, _immutable.Record)(possibleFields, name);\n  var normalize = (0, _lodash.flow)([function (properties) {\n    return (0, _lodash.mapValues)(propCreators, function (creator, propName) {\n      return creator(properties[propName]);\n    });\n  }, (0, _createMapHandler2.default)(normalizers)]);\n  var extend = (0, _createMapHandler2.default)(extenders);\n\n  var RecordModel = function (_RecordInstance) {\n    _inherits(RecordModel, _RecordInstance);\n\n    function RecordModel() {\n      var _ref2;\n\n      _classCallCheck(this, RecordModel);\n\n      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {\n        rest[_key] = arguments[_key];\n      }\n\n      var properties = rest[0],\n          restTail = rest.slice(1);\n\n\n      var handledProperties = _extends({}, extend(properties), normalize(properties));\n\n      return _possibleConstructorReturn(this, (_ref2 = RecordModel.__proto__ || Object.getPrototypeOf(RecordModel)).call.apply(_ref2, [this, handledProperties].concat(_toConsumableArray(restTail))));\n    }\n\n    _createClass(RecordModel, [{\n      key: 'setProperties',\n      value: function setProperties(properties) {\n        return (0, _lodash.toPairs)(properties).reduce(function (acc, _ref3) {\n          var _ref4 = _slicedToArray(_ref3, 2),\n              propName = _ref4[0],\n              propValue = _ref4[1];\n\n          return acc.set(propName, propValue);\n        }, this);\n      }\n    }, {\n      key: 'set',\n      value: function set(propName, value) {\n        var creator = propCreators[propName] || _lodash.identity;\n        return _get(RecordModel.prototype.__proto__ || Object.getPrototypeOf(RecordModel.prototype), 'set', this).call(this, propName, creator(value));\n      }\n    }, {\n      key: 'hardSet',\n      value: function hardSet() {\n        var _get2;\n\n        for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n          rest[_key2] = arguments[_key2];\n        }\n\n        return (_get2 = _get(RecordModel.prototype.__proto__ || Object.getPrototypeOf(RecordModel.prototype), 'set', this)).call.apply(_get2, [this].concat(rest));\n      }\n    }, {\n      key: 'toJS',\n      value: function toJS() {\n        var jsModel = _get(RecordModel.prototype.__proto__ || Object.getPrototypeOf(RecordModel.prototype), 'toJS', this).apply(this);\n        return (0, _lodash.mapValues)(type.properties, function (value, key) {\n          return jsModel[key];\n        });\n      }\n    }]);\n\n    return RecordModel;\n  }(RecordInstance);\n\n  (0, _lodash.toPairs)(methods).forEach(function (_ref5) {\n    var _ref6 = _slicedToArray(_ref5, 2),\n        methodName = _ref6[0],\n        method = _ref6[1];\n\n    RecordModel.prototype[methodName] = method;\n  });\n\n  return RecordModel;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createModel/lib/createRecordModel.js?");

/***/ }),

/***/ "./src/lib/createModel/lib/createSimple.js":
/*!*************************************************!*\
  !*** ./src/lib/createModel/lib/createSimple.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _handleNil = __webpack_require__(/*! ./handleNil */ \"./src/lib/createModel/lib/handleNil.js\");\n\nvar _handleNil2 = _interopRequireDefault(_handleNil);\n\nvar _createWrapper = __webpack_require__(/*! ./createWrapper */ \"./src/lib/createModel/lib/createWrapper.js\");\n\nvar _createWrapper2 = _interopRequireDefault(_createWrapper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createSimpleType = function createSimpleType(property) {\n  return property;\n};\n\nexports.default = (0, _lodash.flow)([_handleNil2.default, _createWrapper2.default])(createSimpleType);\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createModel/lib/createSimple.js?");

/***/ }),

/***/ "./src/lib/createModel/lib/createWrapper.js":
/*!**************************************************!*\
  !*** ./src/lib/createModel/lib/createWrapper.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar createWrapper = function createWrapper(fn) {\n  return function () {\n    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {\n      rest[_key] = arguments[_key];\n    }\n\n    return function (properties) {\n      return fn.apply(undefined, [properties].concat(rest));\n    };\n  };\n};\n\nexports.default = createWrapper;\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createModel/lib/createWrapper.js?");

/***/ }),

/***/ "./src/lib/createModel/lib/handleEmptyDefinitions.js":
/*!***********************************************************!*\
  !*** ./src/lib/createModel/lib/handleEmptyDefinitions.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = createEmptyDefinitionsHandler;\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nfunction createEmptyDefinitionsHandler(fn) {\n  return function handleEmptyDefinitions() {\n    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {\n      rest[_key] = arguments[_key];\n    }\n\n    var properties = rest[0],\n        propDefinitionMap = rest[1];\n\n    return (0, _lodash.isEmpty)(propDefinitionMap) ? properties : fn.apply(undefined, rest);\n  };\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createModel/lib/handleEmptyDefinitions.js?");

/***/ }),

/***/ "./src/lib/createModel/lib/handleNil.js":
/*!**********************************************!*\
  !*** ./src/lib/createModel/lib/handleNil.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = createNilHandler;\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar typeValueMap = {\n  array: [],\n  object: {},\n  string: '',\n  integer: null,\n  datetime: null,\n  image: null,\n  boolean: false\n};\n\nfunction createNilHandler(fn) {\n  return function handleNil() {\n    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {\n      rest[_key] = arguments[_key];\n    }\n\n    var properties = rest[0],\n        definitions = rest[1],\n        types = rest[2]; // eslint-disable-line no-unused-vars\n\n    var type = types.type;\n\n    var defaultValue = typeValueMap[type];\n    return (0, _lodash.isNil)(properties) ? fn.apply(undefined, [defaultValue].concat(_toConsumableArray((0, _lodash.tail)(rest)))) : fn.apply(undefined, rest);\n  };\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/lib/createModel/lib/handleNil.js?");

/***/ }),

/***/ "immutable":
/*!***********************************************************************************!*\
  !*** external {"commonjs":"immutable","commonjs2":"immutable","amd":"immutable"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_immutable__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22immutable%22,%22commonjs2%22:%22immutable%22,%22amd%22:%22immutable%22%7D?");

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