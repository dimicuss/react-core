import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { createReducer, createAction as createActionAct } from 'redux-act';

import fpMap from 'lodash/fp/map';
import fpPickBy from 'lodash/fp/pickBy';
import { flow, toPairs, fromPairs, mapValues, curry, uniqueId, constant } from 'lodash';

import { registry } from '../registry';


const createAction = curry(function createAction(name, key) {
  return createActionAct(`${key}|${name}`);
});

const createDefaultHandler = key => (state, payload) => state.set(key, payload);

const clearState = createAction('clearState');
const getReducers = flow([
  fpPickBy(({ action, handler }) => action !== undefined),
  toPairs,
  fpMap(([key, { action, handler = createDefaultHandler(key) }]) => [action, handler]),
  fromPairs,
]);
const getInitial = ({ initial = null }) => initial;
const defaultSagaReturner = () => () => {};
const defaultConfigCreator = () => ({});


function createActions(names, key) {
  return names.reduce((acc, name) => {
    acc[name] = createAction(name, key);
    return acc;
  }, {});
}


function createContainerCreator(
  props,
  {
    actions = [],
    createSaga = defaultSagaReturner,
    createConfig = defaultConfigCreator,
  },
  { key, params = {} }
) {
  const baseSelector = state => state[key] || fromJS({ [key]: {} });
  const clearStateKey = `${key}ClearState`;
  const clearStateAction = clearState(key);

  const handledActions = {
    ...createActions(actions, key),
    clearState: clearStateAction,
  };

  const {
    properties = {},
    dispatchers = {},
    additionalReducers = {},
    additionalSelectors = {},
  } = createConfig({ actions: handledActions, params, ...props });

  const initialState = fromJS(mapValues(properties, getInitial));
  const handledDispatchers = dispatch => mapValues({
    ...dispatchers,
    [clearStateKey]: clearStateAction,
  }, action => (...rest) => dispatch(action(...rest)));

  const selectors = {
    ...mapValues(properties, (property, propKey) => state => baseSelector(state).get(propKey)),
    ...mapValues(additionalSelectors, selector => createSelector(baseSelector, selector)),
  };

  const reducer = createReducer({
    ...getReducers(properties),
    ...additionalReducers,
    [clearStateAction]: constant(initialState),
  }, initialState);

  const saga = createSaga({ actions: handledActions, selectors, registry, params, ...props });
  const structuredSelectors = createStructuredSelector(selectors);

  return {
    saga,
    reducer,
    selectors,
    props: connect(structuredSelectors),
    actions: handledActions,
    connector: connect(structuredSelectors, handledDispatchers),
    dispatchers: connect(null, handledDispatchers),
  };
}

export default curry(createContainerCreator);
