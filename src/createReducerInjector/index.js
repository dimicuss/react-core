import React from 'react';
import invariant from 'invariant';
import { combineReducers } from 'redux';
import { isEmpty, isString, isFunction, curry } from 'lodash';


function createReducerInjector(store, { reducerName, reducer }, Descendant) {
  class ReducerInjector extends React.PureComponent {
    componentDidMount() {
      invariant(
        isString(reducerName) && !isEmpty(reducerName) && isFunction(reducer),
        '(app/utils...) injectReducer: Expected `reducer` to be a reducer function'
      );

      if (Reflect.has(store.injectedReducers, reducerName) && store.injectedReducers[reducerName] === reducer) return;

      store.injectedReducers[reducerName] = reducer; // eslint-disable-line no-param-reassign
      store.replaceReducer(combineReducers(store.injectedReducers));
    }


    render() {
      return <Descendant {...this.props} />;
    }
  }

  return ReducerInjector;
}


export default curry(createReducerInjector);
