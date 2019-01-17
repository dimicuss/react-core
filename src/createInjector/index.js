import React from 'react';
import { curry } from 'lodash';
import { combineReducers } from 'redux';
import hoistNonReactStatics from 'hoist-non-react-statics';


/* eslint-disable no-param-reassign, react/no-did-mount-set-state, no-console */


function createInjector(store, { name, saga, reducer }, Descendant) {
  class Inject extends React.PureComponent {
    state = {
      passRendering: false,
    };


    sagaTask = null;


    componentDidMount() {
      if (!name) {
        console.info('Name is not specified!');
        return;
      }


      if ((!Reflect.has(store.injectedReducers, name) || store.injectedReducers[name] !== reducer) && reducer) {
        store.injectedReducers[name] = reducer;
        store.replaceReducer(combineReducers(store.injectedReducers));
      } else {
        console.info('Reducer is not injected!');
      }


      if (saga) {
        this.sagaTask = store.runSaga(saga);
      } else {
        console.info('Saga is not injected!');
      }


      this.setState({ passRendering: true });
    }


    componentWillUnmount() {
      if (saga && name) {
        this.sagaTask.cancel();
      }
    }


    render() {
      return this.state.passRendering ? <Descendant {...this.props} /> : null;
    }
  }


  hoistNonReactStatics(Inject, Descendant);


  return Inject;
}


export default curry(createInjector);
