!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=25)}({0:function(e,t){e.exports=require("react")},2:function(e,t){e.exports=require("../../lib/createHoc")},25:function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=this&&this.__assign||function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(0)),s=r(26),f=i(r(27)),p=i(r(2)),l=r(28);function d(e){return e(this)}function y(){return{}}var b=function(e){function t(t,r){var n=e.call(this,t,r)||this,o=t.Descendant,u=t.createDispatchers,c=t.createProps,i=r[t.name],a=i.selectors,p=i.actions;return n.ConnectedDescendant=s.connect(function(e){return function(t){return f.default(e,d,t)}}(c(a)),u(p))(o),n}return o(t,e),t.prototype.render=function(){var e=this.ConnectedDescendant,t=this.props,r=(t.Descendant,t.name,t.createDispatchers,t.createProps,c(t,["Descendant","name","createDispatchers","createProps"]));return a.default.createElement(e,u({},r))},t.contextType=l.ContainerContext,t.defaultProps={name:"",createProps:y,createDispatchers:y},t}(a.default.PureComponent);t.default=p.default(b)},26:function(e,t){e.exports=require("react-redux")},27:function(e,t){e.exports=require("../../lib/mapValues")},28:function(e,t){e.exports=require("../ContainerHoc")}});