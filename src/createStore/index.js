import { flow, identity } from 'lodash';
import createSagaMiddleware from 'redux-saga';
import { createStore as createReduxStore, applyMiddleware } from 'redux';


const sagaMiddleware = createSagaMiddleware();


export default function createStore(connectors, middlewares, initialState = {}) {
  const store = createReduxStore(
    flow(connectors)(identity),
    initialState,
    applyMiddleware(sagaMiddleware, ...middlewares),
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};

  return store;
}
