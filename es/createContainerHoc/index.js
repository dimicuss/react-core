/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import curry from 'lodash/curry';
import uniqueId from 'lodash/uniqueId';
import { combineReducers } from 'redux';
import { string, object, func } from 'prop-types';

import createWrapper from '../createWrapper';


const Context = React.createContext({
  containers: {},
});


class ContainerHoc extends React.PureComponent {
  state = {
    mounted: false,
  }


  componentDidMount() {
    const { containers } = this.context;
    const { name, store, Descendant, createContainer, params, ...otherProps } = this.props;
    const key = uniqueId();
    const container = createContainer({ key, name, params, containers });
    const { saga, reducer } = container;

    store.injectedReducers = { ...store.injectedReducers, [key]: reducer };
    store.replaceReducer(combineReducers(store.injectedReducers));

    this.newContext = { containers: { ...containers, [name]: container } };
    this.sagaTask = store.runSaga(saga, otherProps);
    this.container = container;
    this.setState({ mounted: true });
  }


  componentWillUnmount() {
    const { container } = this;
    const { store } = this.props;
    store.dispatch(container.actions.clearState());
    this.sagaTask.cancel();
  }

  render() {
    const { mounted } = this.state;
    const { name, store, Descendant, createContainer, params, ...otherProps } = this.props;
    return (
      <Context.Provider value={this.newContext}>
        {mounted ? <Descendant {...otherProps} /> : null }
      </Context.Provider>
    );
  }
}


ContainerHoc.propTypes = {
  name: string.isRequired,
  store: object.isRequired,
  Descendant: func.isRequired,
  createContainer: func.isRequired,
  params: object,
};


ContainerHoc.defaultProps = {
  params: {},
};


ContainerHoc.contextType = Context;


const wrapper = createWrapper(ContainerHoc);


export { Context };
export default curry((commonParams, containerParams) => wrapper({ ...commonParams, ...containerParams }), 2);
