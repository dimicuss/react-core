'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reduxAct = require('redux-act');

const reportOnUnAuth = reduxAct.createAction('reportOnUnAuth');

exports.reportOnUnAuth = reportOnUnAuth;
