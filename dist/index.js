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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hoc/ConnectorHoc/index.tsx":
/*!****************************************!*\
  !*** ./src/hoc/ConnectorHoc/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar connect_1 = __importDefault(__webpack_require__(/*! react-redux/lib/connect/connect */ \"react-redux/lib/connect/connect\"));\r\nvar mapValues_1 = __importDefault(__webpack_require__(/*! @/lib/mapValues */ \"./src/lib/mapValues/index.tsx\"));\r\nvar createHoc_1 = __importDefault(__webpack_require__(/*! @/lib/createHoc */ \"./src/lib/createHoc/index.tsx\"));\r\nvar ContainerHoc_1 = __webpack_require__(/*! @/hoc/ContainerHoc */ \"./src/hoc/ContainerHoc/index.tsx\");\r\nfunction callSelector(selector) {\r\n    return selector(this);\r\n}\r\nfunction bindSelectorsToState(selectors) {\r\n    return function (state) { return mapValues_1.default(selectors, callSelector, state); };\r\n}\r\nfunction defaultCreator() {\r\n    return {};\r\n}\r\nvar ConnectorHoc = /** @class */ (function (_super) {\r\n    __extends(ConnectorHoc, _super);\r\n    function ConnectorHoc(props, context) {\r\n        var _this = _super.call(this, props, context) || this;\r\n        var Descendant = props.Descendant, createDispatchers = props.createDispatchers, createProps = props.createProps, name = props.name;\r\n        var _a = context[name], selectors = _a.selectors, actions = _a.actions;\r\n        _this.ConnectedDescendant = connect_1.default(bindSelectorsToState(createProps(selectors)), createDispatchers(actions))(Descendant);\r\n        return _this;\r\n    }\r\n    ConnectorHoc.prototype.render = function () {\r\n        var _a = this, ConnectedDescendant = _a.ConnectedDescendant, props = _a.props;\r\n        var Descendant = props.Descendant, name = props.name, createDispatchers = props.createDispatchers, createProps = props.createProps, otherProps = __rest(props, [\"Descendant\", \"name\", \"createDispatchers\", \"createProps\"]);\r\n        return react_1.default.createElement(ConnectedDescendant, __assign({}, otherProps));\r\n    };\r\n    ConnectorHoc.contextType = ContainerHoc_1.ContainerContext;\r\n    ConnectorHoc.defaultProps = {\r\n        name: '',\r\n        createProps: defaultCreator,\r\n        createDispatchers: defaultCreator,\r\n    };\r\n    return ConnectorHoc;\r\n}(react_1.default.PureComponent));\r\nexports.default = createHoc_1.default(ConnectorHoc);\r\n\n\n//# sourceURL=webpack:///./src/hoc/ConnectorHoc/index.tsx?");

/***/ }),

/***/ "./src/hoc/ContainerHoc/index.tsx":
/*!****************************************!*\
  !*** ./src/hoc/ContainerHoc/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Context_1 = __importDefault(__webpack_require__(/*! react-redux/lib/components/Context */ \"react-redux/lib/components/Context\"));\r\nvar ContextConsumerHoc_1 = __importDefault(__webpack_require__(/*! @/hoc/ContextConsumerHoc */ \"./src/hoc/ContextConsumerHoc/index.tsx\"));\r\nvar combineReducers_1 = __importDefault(__webpack_require__(/*! @/lib/combineReducers */ \"./src/lib/combineReducers/index.tsx\"));\r\nvar createWrappedHoc_1 = __importDefault(__webpack_require__(/*! @/lib/createWrappedHoc */ \"./src/lib/createWrappedHoc/index.ts\"));\r\nvar rootSaga_1 = __webpack_require__(/*! @/lib/rootSaga */ \"./src/lib/rootSaga/index.ts\");\r\nvar createContainer_1 = __importDefault(__webpack_require__(/*! ./lib/createContainer */ \"./src/hoc/ContainerHoc/lib/createContainer.ts\"));\r\nvar ContainerContext = react_1.default.createContext({});\r\nexports.ContainerContext = ContainerContext;\r\nvar initialState = {};\r\nfunction defaultSaga() { return __generator(this, function (_a) {\r\n    return [2 /*return*/];\r\n}); }\r\nfunction defaultReducer(state) {\r\n    if (state === void 0) { state = initialState; }\r\n    return state;\r\n}\r\nfunction defaultCreateSaga() { return defaultSaga; }\r\nfunction defaultCreateReducer() { return defaultReducer; }\r\nvar ContainerHoc = /** @class */ (function (_super) {\r\n    __extends(ContainerHoc, _super);\r\n    function ContainerHoc(props, context) {\r\n        var _a, _b;\r\n        var _this = _super.call(this, props, context) || this;\r\n        var redux = props.redux, containerContext = props.containerContext, name = props.name, createSaga = props.createSaga, createReducer = props.createReducer;\r\n        var container = createContainer_1.default(props);\r\n        var args = __assign(__assign({}, container), { containers: containerContext, name: name });\r\n        var saga = createSaga(args);\r\n        var reducer = createReducer(args);\r\n        _this.nextContainerContext = __assign(__assign({}, containerContext), (_a = {}, _a[name] = container, _a));\r\n        _this.container = container;\r\n        redux.store.replaceReducer(combineReducers_1.default((_b = {}, _b[name] = reducer, _b)));\r\n        redux.store.dispatch(rootSaga_1.runSaga({ name: name, saga: saga }));\r\n        return _this;\r\n    }\r\n    ContainerHoc.prototype.componentWillUnmount = function () {\r\n        var _a = this.props, name = _a.name, redux = _a.redux;\r\n        redux.store.dispatch(rootSaga_1.cancelSaga({ name: name }));\r\n        redux.store.dispatch(this.container.actions.clearState());\r\n    };\r\n    ContainerHoc.prototype.render = function () {\r\n        var _a = this.props, Descendant = _a.Descendant, redux = _a.redux, containerContext = _a.containerContext, name = _a.name, actions = _a.actions, selectors = _a.selectors, createSaga = _a.createSaga, createReducer = _a.createReducer, otherProps = __rest(_a, [\"Descendant\", \"redux\", \"containerContext\", \"name\", \"actions\", \"selectors\", \"createSaga\", \"createReducer\"]);\r\n        return (react_1.default.createElement(ContainerContext.Provider, { value: this.nextContainerContext },\r\n            react_1.default.createElement(Descendant, __assign({}, otherProps))));\r\n    };\r\n    ContainerHoc.defaultProps = {\r\n        name: '',\r\n        actions: [],\r\n        selectors: {},\r\n        createSaga: defaultCreateSaga,\r\n        createReducer: defaultCreateReducer,\r\n    };\r\n    return ContainerHoc;\r\n}(react_1.default.PureComponent));\r\nexports.default = createWrappedHoc_1.default(ContextConsumerHoc_1.default({\r\n    consumers: {\r\n        redux: Context_1.default.Consumer,\r\n        containerContext: ContainerContext.Consumer,\r\n    },\r\n}))(ContainerHoc);\r\n\n\n//# sourceURL=webpack:///./src/hoc/ContainerHoc/index.tsx?");

/***/ }),

/***/ "./src/hoc/ContainerHoc/lib/createContainer.ts":
/*!*****************************************************!*\
  !*** ./src/hoc/ContainerHoc/lib/createContainer.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar redux_act_1 = __webpack_require__(/*! redux-act */ \"redux-act\");\r\nvar compose_1 = __importDefault(__webpack_require__(/*! @/lib/compose */ \"./src/lib/compose/index.ts\"));\r\nvar mapValues_1 = __importDefault(__webpack_require__(/*! @/lib/mapValues */ \"./src/lib/mapValues/index.tsx\"));\r\nvar fromEntries_1 = __importDefault(__webpack_require__(/*! @/lib/fromEntries */ \"./src/lib/fromEntries/index.ts\"));\r\nfunction createAction(name) {\r\n    return [name, redux_act_1.createAction(this + \"/\" + name)];\r\n}\r\nfunction createSelector(select) {\r\n    var _this = this;\r\n    var selectBase = function (state) { return state[_this]; };\r\n    return compose_1.default(selectBase, select);\r\n}\r\nfunction createContainer(_a) {\r\n    var _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.actions, actions = _c === void 0 ? [] : _c, _d = _a.selectors, selectors = _d === void 0 ? {} : _d;\r\n    return {\r\n        actions: fromEntries_1.default(__spreadArrays(['clearState'], actions).map(createAction, name)),\r\n        selectors: mapValues_1.default(selectors, createSelector, name),\r\n    };\r\n}\r\nexports.default = createContainer;\r\n\n\n//# sourceURL=webpack:///./src/hoc/ContainerHoc/lib/createContainer.ts?");

/***/ }),

/***/ "./src/hoc/ContextConsumerHoc/index.tsx":
/*!**********************************************!*\
  !*** ./src/hoc/ContextConsumerHoc/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar createHoc_1 = __importDefault(__webpack_require__(/*! @/lib/createHoc */ \"./src/lib/createHoc/index.tsx\"));\r\nvar ContextConsumerHoc = /** @class */ (function (_super) {\r\n    __extends(ContextConsumerHoc, _super);\r\n    function ContextConsumerHoc(props, context) {\r\n        var _this = _super.call(this, props, context) || this;\r\n        _this.createConsumerRenderer = function (consumerEntries, i) {\r\n            if (i === void 0) { i = 0; }\r\n            if (i < consumerEntries.length) {\r\n                var nextRenderConsumer_1 = _this.createConsumerRenderer(consumerEntries, i + 1);\r\n                var _a = consumerEntries[i], name_1 = _a[0], Consumer_1 = _a[1];\r\n                var catchValue_1 = function (value) {\r\n                    var _a;\r\n                    _this.contextValues = __assign(__assign({}, _this.contextValues), (_a = {}, _a[name_1] = value, _a));\r\n                    return nextRenderConsumer_1();\r\n                };\r\n                return function () {\r\n                    return react_1.default.createElement(Consumer_1, null, catchValue_1);\r\n                };\r\n            }\r\n            return _this.renderDescendant;\r\n        };\r\n        _this.renderDescendant = function () {\r\n            var _a = _this.props, Descendant = _a.Descendant, consumers = _a.consumers, otherProps = __rest(_a, [\"Descendant\", \"consumers\"]);\r\n            var propsToPass = __assign(__assign({}, otherProps), _this.contextValues);\r\n            return react_1.default.createElement(Descendant, __assign({}, propsToPass));\r\n        };\r\n        _this.contextValues = {};\r\n        _this.renderConsumer = _this.createConsumerRenderer(Object.entries(props.consumers));\r\n        return _this;\r\n    }\r\n    ContextConsumerHoc.prototype.render = function () {\r\n        return this.renderConsumer();\r\n    };\r\n    ContextConsumerHoc.defaultProps = {\r\n        consumers: {},\r\n    };\r\n    return ContextConsumerHoc;\r\n}(react_1.default.PureComponent));\r\nexports.default = createHoc_1.default(ContextConsumerHoc);\r\n\n\n//# sourceURL=webpack:///./src/hoc/ContextConsumerHoc/index.tsx?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ContainerHoc_1 = __importDefault(__webpack_require__(/*! ./hoc/ContainerHoc */ \"./src/hoc/ContainerHoc/index.tsx\"));\r\nvar ConnectorHoc_1 = __importDefault(__webpack_require__(/*! ./hoc/ConnectorHoc */ \"./src/hoc/ConnectorHoc/index.tsx\"));\r\nvar ContextConsumerHoc_1 = __importDefault(__webpack_require__(/*! ./hoc/ContextConsumerHoc */ \"./src/hoc/ContextConsumerHoc/index.tsx\"));\r\nvar compose_1 = __importDefault(__webpack_require__(/*! ./lib/compose */ \"./src/lib/compose/index.ts\"));\r\nvar rootSaga_1 = __importDefault(__webpack_require__(/*! ./lib/rootSaga */ \"./src/lib/rootSaga/index.ts\"));\r\nvar passProps_1 = __importDefault(__webpack_require__(/*! ./lib/passProps */ \"./src/lib/passProps/index.tsx\"));\r\nvar createHoc_1 = __importDefault(__webpack_require__(/*! ./lib/createHoc */ \"./src/lib/createHoc/index.tsx\"));\r\nvar combineReducers_1 = __importDefault(__webpack_require__(/*! ./lib/combineReducers */ \"./src/lib/combineReducers/index.tsx\"));\r\nvar createWrappedHoc_1 = __importDefault(__webpack_require__(/*! ./lib/createWrappedHoc */ \"./src/lib/createWrappedHoc/index.ts\"));\r\nvar foo = {\r\n    ContainerHoc: ContainerHoc_1.default,\r\n    ConnectorHoc: ConnectorHoc_1.default,\r\n    ContextConsumer: ContextConsumerHoc_1.default,\r\n    compose: compose_1.default,\r\n    rootSaga: rootSaga_1.default,\r\n    passProps: passProps_1.default,\r\n    createHoc: createHoc_1.default,\r\n    combineReducers: combineReducers_1.default,\r\n    createWrappedHoc: createWrappedHoc_1.default,\r\n};\r\nexports.default = foo;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/lib/combineReducers/index.tsx":
/*!*******************************************!*\
  !*** ./src/lib/combineReducers/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar initialReducers = {};\r\nfunction setInitialReducers(reducers) {\r\n    initialReducers = reducers;\r\n}\r\nexports.setInitialReducers = setInitialReducers;\r\nfunction combineReducers(reducers) {\r\n    initialReducers = __assign(__assign({}, initialReducers), reducers);\r\n    return redux_1.combineReducers(initialReducers);\r\n}\r\nexports.default = combineReducers;\r\n\n\n//# sourceURL=webpack:///./src/lib/combineReducers/index.tsx?");

/***/ }),

/***/ "./src/lib/compose/index.ts":
/*!**********************************!*\
  !*** ./src/lib/compose/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar compose = function () {\r\n    var functions = [];\r\n    for (var _i = 0; _i < arguments.length; _i++) {\r\n        functions[_i] = arguments[_i];\r\n    }\r\n    return function (arg) {\r\n        var result = arg;\r\n        for (var i = 0; i < functions.length; i++) {\r\n            result = functions[i](result);\r\n        }\r\n        return result;\r\n    };\r\n};\r\nexports.default = compose;\r\n\n\n//# sourceURL=webpack:///./src/lib/compose/index.ts?");

/***/ }),

/***/ "./src/lib/createHoc/index.tsx":
/*!*************************************!*\
  !*** ./src/lib/createHoc/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.default = (function (Wrapper) { return function (props) {\r\n    if (props === void 0) { props = {}; }\r\n    return function (Descendant) {\r\n        var WrapperInvoker = /** @class */ (function (_super) {\r\n            __extends(WrapperInvoker, _super);\r\n            function WrapperInvoker() {\r\n                return _super !== null && _super.apply(this, arguments) || this;\r\n            }\r\n            WrapperInvoker.prototype.render = function () {\r\n                return react_1.default.createElement(Wrapper, __assign({}, this.props, props, { Descendant: Descendant }));\r\n            };\r\n            return WrapperInvoker;\r\n        }(react_1.default.PureComponent));\r\n        return WrapperInvoker;\r\n    };\r\n}; });\r\n\n\n//# sourceURL=webpack:///./src/lib/createHoc/index.tsx?");

/***/ }),

/***/ "./src/lib/createWrappedHoc/index.ts":
/*!*******************************************!*\
  !*** ./src/lib/createWrappedHoc/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar compose_1 = __importDefault(__webpack_require__(/*! @/lib/compose */ \"./src/lib/compose/index.ts\"));\r\nvar createHoc_1 = __importDefault(__webpack_require__(/*! @/lib/createHoc */ \"./src/lib/createHoc/index.tsx\"));\r\nexports.default = (function () {\r\n    var wrappers = [];\r\n    for (var _i = 0; _i < arguments.length; _i++) {\r\n        wrappers[_i] = arguments[_i];\r\n    }\r\n    return function (Wrapper) { return function (props) {\r\n        if (props === void 0) { props = {}; }\r\n        return compose_1.default.apply(void 0, __spreadArrays([createHoc_1.default(Wrapper)(props)], wrappers));\r\n    }; };\r\n});\r\n\n\n//# sourceURL=webpack:///./src/lib/createWrappedHoc/index.ts?");

/***/ }),

/***/ "./src/lib/fromEntries/index.ts":
/*!**************************************!*\
  !*** ./src/lib/fromEntries/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction fromEntries(entries) {\r\n    var result = {};\r\n    for (var i = 0; i < entries.length; i++) {\r\n        result[entries[i][0]] = entries[i][1];\r\n    }\r\n    return result;\r\n}\r\nexports.default = fromEntries;\r\n\n\n//# sourceURL=webpack:///./src/lib/fromEntries/index.ts?");

/***/ }),

/***/ "./src/lib/mapValues/index.tsx":
/*!*************************************!*\
  !*** ./src/lib/mapValues/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction mapValues(simpleObject, handleValue, context) {\r\n    var result = {};\r\n    for (var key in simpleObject) {\r\n        if (simpleObject.hasOwnProperty(key)) {\r\n            result[key] = handleValue.call(context, simpleObject[key], key, simpleObject);\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.default = mapValues;\r\n\n\n//# sourceURL=webpack:///./src/lib/mapValues/index.tsx?");

/***/ }),

/***/ "./src/lib/passProps/index.tsx":
/*!*************************************!*\
  !*** ./src/lib/passProps/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.default = (function (Descendant) { return function (props) {\r\n    if (props === void 0) { props = {}; }\r\n    var WrapperInvoker = /** @class */ (function (_super) {\r\n        __extends(WrapperInvoker, _super);\r\n        function WrapperInvoker() {\r\n            return _super !== null && _super.apply(this, arguments) || this;\r\n        }\r\n        WrapperInvoker.prototype.render = function () {\r\n            return react_1.default.createElement(Descendant, __assign({}, this.props, props));\r\n        };\r\n        return WrapperInvoker;\r\n    }(react_1.default.PureComponent));\r\n    return WrapperInvoker;\r\n}; });\r\n\n\n//# sourceURL=webpack:///./src/lib/passProps/index.tsx?");

/***/ }),

/***/ "./src/lib/rootSaga/index.ts":
/*!***********************************!*\
  !*** ./src/lib/rootSaga/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar redux_act_1 = __webpack_require__(/*! redux-act */ \"redux-act\");\r\nvar effects_1 = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\r\nvar runSaga = redux_act_1.createAction('runSaga');\r\nexports.runSaga = runSaga;\r\nvar cancelSaga = redux_act_1.createAction('cancelSaga');\r\nexports.cancelSaga = cancelSaga;\r\nfunction handleRunSaga(_a) {\r\n    var cancelPayload;\r\n    var runPayload = _a.payload;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0: return [4 /*yield*/, effects_1.fork(runPayload.saga)];\r\n            case 1:\r\n                _b.sent();\r\n                _b.label = 2;\r\n            case 2:\r\n                if (false) {}\r\n                return [4 /*yield*/, effects_1.take(cancelSaga)];\r\n            case 3:\r\n                cancelPayload = (_b.sent()).payload;\r\n                if (!(runPayload.name === cancelPayload.name)) return [3 /*break*/, 5];\r\n                return [4 /*yield*/, effects_1.cancel()];\r\n            case 4:\r\n                _b.sent();\r\n                _b.label = 5;\r\n            case 5: return [3 /*break*/, 2];\r\n            case 6: return [2 /*return*/];\r\n        }\r\n    });\r\n}\r\nfunction rootSaga() {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, effects_1.takeEvery(runSaga, handleRunSaga)];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}\r\nexports.default = rootSaga;\r\n\n\n//# sourceURL=webpack:///./src/lib/rootSaga/index.ts?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-redux/lib/components/Context":
/*!*****************************************************!*\
  !*** external "react-redux/lib/components/Context" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux/lib/components/Context\");\n\n//# sourceURL=webpack:///external_%22react-redux/lib/components/Context%22?");

/***/ }),

/***/ "react-redux/lib/connect/connect":
/*!**************************************************!*\
  !*** external "react-redux/lib/connect/connect" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux/lib/connect/connect\");\n\n//# sourceURL=webpack:///external_%22react-redux/lib/connect/connect%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-act":
/*!****************************!*\
  !*** external "redux-act" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-act\");\n\n//# sourceURL=webpack:///external_%22redux-act%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ })

/******/ });