import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { createReducer, createAction as createActionAct } from 'redux-act';

import fpMap from 'lodash/fp/map';
import fpPickBy from 'lodash/fp/pickBy';
import { flow, toPairs, fromPairs, mapValues, curry } from 'lodash';


const createAction = curry(function createAction(name, key) {
  return createActionAct(`${key}--${name}`);
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


function createSagaWrapper(sagaCreator, params) {
  return function* sagaCaller() {
    try { yield sagaCreator(params)() } catch (e) { console.error(e) }
  };
}


function createContainer(
  {
    inject,
    ...otherProps
  },
  {
    actions = [],
    createSaga = defaultSagaReturner,
    createConfig = defaultConfigCreator,
  }
) {
  return function addKey(key, params = {}) {
    const baseSelector = state => state[key] || fromJS({ [key]: {} });
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
      [clearStateAction]: state => initialState,
    }, initialState);

    const saga = createSagaWrapper(createSaga, { actions: handledActions, selectors, params, ...otherProps });
    const structuredSelectors = createStructuredSelector(selectors);
    const connector = connect(structuredSelectors, handledDispatchers);
    const injectors = inject({ name: key, saga, reducer });

    const result = flow([connector, injectors]);

    result.actions = handledActions;
    result.connector = connector;
    result.selectors = selectors;
    result.injectors = injectors;
    result.propsConnector = connect(structuredSelectors);
    result.dispatchersConnector = connect(null, handledDispatchers);

    return result;
  };
}

export default curry(createContainer);
