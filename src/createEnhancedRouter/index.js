import fpGet from 'lodash/fp/get';
import { parse } from 'query-string';
import { matchPath } from 'react-router';
import { isEqual, some } from 'lodash';
import { createReducer } from 'redux-act';
import { LOCATION_CHANGE } from 'connected-react-router';


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
