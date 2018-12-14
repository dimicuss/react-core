'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fpGet = _interopDefault(require('lodash/fp/get'));
var queryString = require('query-string');
var reactRouter = require('react-router');
var lodash = require('lodash');
var reduxAct = require('redux-act');
var connectedReactRouter = require('connected-react-router');

const getMatch = fpGet(['match']);
const getParams = fpGet(['match', 'params']);
const getSearch = fpGet(['location', 'search']);
const getPathName = fpGet(['location', 'pathname']);
const getRouteName = fpGet(['routeName']);
const everyPredicate = args => !lodash.isEqual(...args);

const initialPreviousValues = {
  match: null,
  location: null,
  routeName: null,
};


function getReferrerHost() {
  const { referrer } = document;

  if (!referrer) { return ''; }

  const url = document.createElement('a');
  url.href = referrer;
  return url.hostname;
}


function createEnhancedRouter(routes, history) {
  const routesSelectors = routes.map(route => ({
    route,
    selector: location => reactRouter.matchPath(location.pathname, route.path),
  }));


  function createState(state, { location }) {
    const routeMatchPair = routesSelectors
      .map(({ route, selector }) => ({ route, match: selector(location) }))
      .find(({ match }) => match !== null && match.isExact);

    const { route, match } = routeMatchPair || { match: null, route: null };
    const { name: routeName } = route;

    const previousMatch = getMatch(state);
    const previousSearch = getSearch(state) || '';
    const previousParams = getParams(state) || {};
    const previousPathName = getPathName(state);
    const previousRouteName = getRouteName(state);
    const changed = lodash.some([
      [previousSearch, location.search],
      [previousParams, match.params],
    ], everyPredicate);

    return {
      match,
      changed,
      location,
      routeName,
      previousMatch,
      previousPathName,
      previousRouteName,
      query: queryString.parse(location.search),
      currentHost: window.location.host,
      previousHost: getReferrerHost(),
    };
  }


  const initialState = createState(initialPreviousValues, { location: history.location });


  return reduxAct.createReducer({
    [connectedReactRouter.LOCATION_CHANGE]: createState
  }, initialState);
}

module.exports = createEnhancedRouter;
