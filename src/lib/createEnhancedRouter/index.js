import fpGet from 'lodash/fp/get';
import { parse } from 'query-string';
import { matchPath } from 'react-router';
import { isEqual, some } from 'lodash';
import { createReducer } from 'redux-act';
import { LOCATION_CHANGE } from 'connected-react-router';


/*
"connected-react-router": "^4.3.0",
  "history": "^4.7.2",
  "immutable": "v3.8.2",
  "invariant": "^2.2.2",
  "lodash": "^4.17.10",
  "query-string": "^5.0.0",
  "react": "^16.7.0",
  "react-redux": "^5.0.6",
  "react-router": "^4.2.0",
  "redux": "^4.0.1",
  "redux-act": "^1.4.0",
  "redux-saga": "^0.15.6",
  "reselect": "^3.0.1"
*/


const getMatch = fpGet(['match']);
const getParams = fpGet(['match', 'params']);
const getSearch = fpGet(['location', 'search']);
const getPathName = fpGet(['location', 'pathname']);
const getRouteName = fpGet(['routeName']);
const everyPredicate = args => !isEqual(...args);

const initialPreviousValues = {
  match: null,
  location: null,
  routeName: null,
};


export default function createEnhancedRouter(routes, history) {
  const routesSelectors = routes.map(route => ({
    route,
    selector: location => matchPath(location.pathname, route.path),
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
    const changed = some([
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
      query: parse(location.search),
    };
  }


  const initialState = createState(initialPreviousValues, { location: history.location });


  return createReducer({
    [LOCATION_CHANGE]: createState
  }, initialState);
}
