'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reselect = require('reselect');

const selectRouter = ({ enhancedRouter }) => enhancedRouter;
const selectPathname = reselect.createSelector(selectRouter, ({ location }) => location.pathname);
const selectRouteName = reselect.createSelector(selectRouter, ({ routeName }) => routeName);

exports.selectRouter = selectRouter;
exports.selectPathname = selectPathname;
exports.selectRouteName = selectRouteName;
