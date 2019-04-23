/* eslint-disable no-empty-function */
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { createReducer, createAction as createActionAct } from 'redux-act';

import fpMap from 'lodash/fp/map';
import fpPickBy from 'lodash/fp/pickBy';
import { flow, toPairs, fromPairs, mapValues, curry, constant } from 'lodash';

import { registry } from '../registry';


const getInitial = ({ initial = null }) => initial;
const createAction = curry((name, key) => createActionAct(`${key}|${name}`), 2);
const createDefaultHandler = key => (state, payload) => state.set(key, payload);
const getReducers = flow([
  fpPickBy(({ action }) => action !== undefined),
  toPairs,
  fpMap(([key, { action, handler = createDefaultHandler(key) }]) => [action, handler]),
  fromPairs,
]);

const clearState = createAction('clearState');
const defaultSagaReturner = () => function* defaultSaga() {};
const defaultConfigCreator = () => ({});


const createActions = (names, key) => names.reduce((acc, name) => {
  acc[name] = createAction(name, key);
  return acc;
}, {});


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

  return {
    saga,
    reducer,
    selectors,
    actions: handledActions,
    dispatchers: { ...dispatchers, [clearStateKey]: clearStateAction },
  };
}

export default curry(createContainerCreator);
