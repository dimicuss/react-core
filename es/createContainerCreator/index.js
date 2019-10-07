/* eslint-disable no-empty-function */
import flow from 'lodash/flow';
import fpMap from 'lodash/fp/map';
import curry from 'lodash/curry';
import toPairs from 'lodash/toPairs';
import constant from 'lodash/constant';
import fpPickBy from 'lodash/fp/pickBy';
import fromPairs from 'lodash/fromPairs';
import mapValues from 'lodash/mapValues';

import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { createReducer, createAction as createActionAct } from 'redux-act';


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
  baseProps,
  {
    actions = [],
    createSaga = defaultSagaReturner,
    createConfig = defaultConfigCreator,
  },
  { key, name, ...otherProps }
) {
  const baseSelector = state => state[key] || fromJS({ [key]: {} });
  const clearStateKey = `${name}ClearState`;
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
  } = createConfig({ actions: handledActions, ...baseProps });

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

  const saga = createSaga({ actions: handledActions, selectors, ...otherProps, ...baseProps });

  return {
    saga,
    reducer,
    selectors,
    actions: handledActions,
    dispatchers: { ...dispatchers, [clearStateKey]: clearStateAction },
  };
}

export default curry(createContainerCreator, 3);
