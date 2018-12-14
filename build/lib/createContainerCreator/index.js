'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var immutable = require('immutable');
var reactRedux = require('react-redux');
var reselect = require('reselect');
var reduxAct = require('redux-act');
var fpMap = _interopDefault(require('lodash/fp/map'));
var fpPickBy = _interopDefault(require('lodash/fp/pickBy'));
var lodash = require('lodash');

/* eslint-disable no-unused-vars, prefer-arrow-callback  */


const createAction = lodash.curry(function createAction(name, key) {
  return reduxAct.createAction(`${key}--${name}`);
});

const createDefaultHandler = key => (state, payload) => state.set(key, payload);

const clearState = createAction('clearState');
const getReducers = lodash.flow([
  fpPickBy(({ action, handler }) => action !== undefined),
  lodash.toPairs,
  fpMap(([key, { action, handler = createDefaultHandler(key) }]) => [action, handler]),
  lodash.fromPairs,
]);
const getInitial = ({ initial = null }) => initial;
const defaultSagaReturner = () => () => {};
const defaultConfigCreator = () => ({});


function createSagaWrapper(sagaCreator, params) {
  return function* sagaCaller() {
    yield sagaCreator(params)();
  };
}


function createContainer(
  {
    injectSaga,
    injectReducer,
    ...otherProps
  },
  {
    actions = [],
    createSaga = defaultSagaReturner,
    createConfig = defaultConfigCreator,
  }
) {
  return function addKey(key, params = {}) {
    const baseSelector = state => state[key] || immutable.fromJS({ [key]: {} });
    const clearStateKey = `${key}ClearState`;
    const clearStateAction = clearState(key);

    const keyedActions = actions.reduce((acc, actionName) => {
      acc[actionName] = createAction(actionName)(key);
      return acc;
    }, {});

    const handledActions = {
      ...keyedActions,
      clearState: clearStateAction,
    };

    const {
      properties = {},
      dispatchers = {},
      additionalReducers = {},
      additionalSelectors = {},
    } = createConfig({ actions: handledActions, params, ...otherProps });


    const initialState = immutable.fromJS(lodash.mapValues(properties, getInitial));
    const handledDispatchers = dispatch => lodash.mapValues({
      ...dispatchers,
      [clearStateKey]: clearStateAction,
    }, action => (...rest) => dispatch(action(...rest)));

    const selectors = {
      ...lodash.mapValues(properties, (property, propKey) => state => baseSelector(state).get(propKey)),
      ...lodash.mapValues(additionalSelectors, selector => reselect.createSelector(baseSelector, selector)),
    };

    const reducer = reduxAct.createReducer({
      ...getReducers(properties),
      ...additionalReducers,
      [clearStateAction]: state => initialState,
    }, initialState);

    const saga = createSagaWrapper(createSaga, { actions: handledActions, selectors, params, ...otherProps });
    const structuredSelectors = reselect.createStructuredSelector(selectors);
    const connector = reactRedux.connect(structuredSelectors, handledDispatchers);
    const injectors = [
      injectSaga({ sagaName: key, saga }),
      injectReducer({ reducerName: key, reducer }),
    ];

    const result = lodash.flow([connector, ...injectors]);

    result.actions = handledActions;
    result.connector = connector;
    result.selectors = selectors;
    result.injectors = lodash.flow(injectors);
    result.propsConnector = reactRedux.connect(structuredSelectors);
    result.dispatchersConnector = reactRedux.connect(null, handledDispatchers);

    return result;
  };
}

var index = lodash.curry(createContainer);

module.exports = index;
