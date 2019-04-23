/* eslint-disable react/no-did-mount-set-state */

import React from 'react';
import { curry } from 'lodash';
import { combineReducers } from 'redux';
import { string, object, func } from 'prop-types';

import createWrapper from '../createWrapper';
import { addContainer, removeContainer, createKey } from '../registry';


class ContainerHoc extends React.PureComponent {
  state = {
    passRendering: false,
  };


  componentDidMount() {
    const { name, store, keyGetter, Descendant, createContainer, params, ...otherProps } = this.props;
    const key = createKey(keyGetter(this.props), name);
    const container = createContainer({ key, params });
    const { saga, reducer } = container;

    addContainer(key, container);
    store.injectedReducers = { ...store.injectedReducers, [key]: reducer };
    store.replaceReducer(combineReducers(store.injectedReducers));

    this.key = key;
    this.sagaTask = store.runSaga(saga, otherProps);
    this.container = container;
    this.setState({ passRendering: true });
  }


  componentWillUnmount() {
    const { key, container } = this;
    const { store } = this.props;

    removeContainer(key);
    store.dispatch(container.actions.clearState());
    this.sagaTask.cancel();
  }


  render() {
    const { passRendering } = this.state;
    const { name, store, keyGetter, Descendant, createContainer, params, ...otherProps } = this.props;
    return passRendering ? <Descendant {...otherProps} /> : null;
  }
}


ContainerHoc.propTypes = {
  name: string.isRequired,
  store: object.isRequired,
  keyGetter: func.isRequired,
  Descendant: func.isRequired,
  createContainer: func.isRequired,
  params: object,
};


ContainerHoc.defaultProps = {
  params: {},
};


const wrapper = createWrapper(ContainerHoc);


function passParams(commonParams, containerParams) {
  return wrapper({ ...commonParams, ...containerParams });
}


export default curry(passParams);
