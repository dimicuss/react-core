import React from 'react';
import { curry } from 'lodash';

import { combineReducers } from 'redux';

/* eslint-disable no-param-reassign, react/no-did-mount-set-state, no-console */


function createInjector(store, { name, saga, reducer }, Descendant) {
  class Inject extends React.PureComponent {
    state = {
      passRendering: false,
    };


    componentDidMount() {
      if (!name) {
        console.info('Name is not specified!');
      }


      if ((!Reflect.has(store.injectedReducers, name) || store.injectedReducers[name] !== reducer) && reducer) {
        store.injectedReducers[name] = reducer;
        store.replaceReducer(combineReducers(store.injectedReducers));
      } else {
        console.info('Saga is not specified');
      }


      if (saga) {
        this.sagaTask = store.runSaga(saga);
      } else {
        console.info('Saga is not specified');
      }


      this.setState({ passRendering: true });
    }


    componentWillUnmount() {
      if (saga) {
        this.sagaTask.cancel();
      }
    }


    render() {
      return this.state.passRendering ? <Descendant {...this.props} /> : null;
    }
  }


  return Inject;
}


export default curry(createInjector);
