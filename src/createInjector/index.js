import React from 'react';
import { curry } from 'lodash';

import { combineReducers } from 'redux';



function createInjector(store, { name, saga, reducer }, Descendant) {
  class Inject extends React.Component {
    state = {
      passRendering: false,
    };


    componentDidMount() {
      if (!name) {
        console.info('Name is not specified');
      }


      if ((!Reflect.has(store.injectedReducers, name) || store.injectedReducers[name] !== reducer) && reducer) {
        store.injectedReducers[name] = reducer;
        store.replaceReducer(combineReducers(store.injectedReducers));
      } else {
        console.info('Saga is not specified');
      }


      if (!Reflect.has(store.injectedSagas, name) && saga) {
        store.injectedSagas[name] = { saga, task: store.runSaga(saga) }
      } else {
        console.info('Saga is not specified');
      }


      this.setState({ passRendering: true });
    }


    componentWillUnmount() {
      if (Reflect.has(store.injectedSagas, name)) {
        const descriptor = store.injectedSagas[name];
        descriptor.task.cancel()
      }
    }


    render() {
      return this.state.passRendering ? <Descendant {...this.props} /> : null;
    }
  }


  return Inject;
}


export default curry(createInjector);
