import React from 'react';
import { connect } from 'react-redux';
import { func, string, array } from 'prop-types';
import { curry, pick, mapValues, keys, stubObject } from 'lodash';
import { createStructuredSelector } from 'reselect';

import createWrapper from '../createWrapper';
import { getContainer, createKey } from '../registry';


const createDispatchers = dispatchers => dispatch => mapValues({
  ...dispatchers,
}, action => (...rest) => dispatch(action(...rest)));


const connectors = {
  props: ({ selectors }) => connect(
    createStructuredSelector(selectors),
    stubObject
  ),
  connector: ({ selectors, dispatchers }) => connect(
    createStructuredSelector(selectors),
    createDispatchers(dispatchers)
  ),
  dispatchers: ({ dispatchers }) => connect(
    null,
    createDispatchers(dispatchers)
  ),
  specificProps: ({ selectors, names }) => connect(
    createStructuredSelector(pick(selectors, names)),
    stubObject,
  ),
  specificDispatchers: ({ dispatchers, names }) => connect(
    null,
    createDispatchers(pick(dispatchers, names))
  ),
};


class ConnectorHoc extends React.PureComponent {
  constructor(props) {
    super(props);
    const { name, type, keyGetter, Descendant, names } = props;
    const key = createKey(keyGetter(props), name);
    this.WrappedDescendant = connectors[type]({ ...getContainer(key), names })(Descendant);
  }


  render() {
    const { WrappedDescendant } = this;
    const { Descendant, name, type, keyGetter, ...otherProps } = this.props;
    return <WrappedDescendant {...otherProps} />;
  }
}


ConnectorHoc.propTypes = {
  Descendant: func.isRequired,
  name: string.isRequired,
  names: array,
  type: string.isRequired,
  keyGetter: func.isRequired,
};


ConnectorHoc.defaultProps = {
  names: [],
};


const wrapper = createWrapper(ConnectorHoc);

export const connectorTypes = keys(connectors);

export default curry((commonParams, connectorParams) => wrapper({ ...commonParams, ...connectorParams }), 2);
