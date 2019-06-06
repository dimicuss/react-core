import React from 'react';
import { connect } from 'react-redux';
import { func, string, array } from 'prop-types';
import { createStructuredSelector } from 'reselect';

import keys from 'lodash/keys';
import pick from 'lodash/pick';
import curry from 'lodash/curry';
import mapValues from 'lodash/mapValues';
import stubObject from 'lodash/stubObject';

import { Context } from '../createContainerHoc';
import createWrapper from '../createWrapper';


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
  constructor(...props) {
    super(...props);
    const { containers } = this.context;
    const { name, type, Descendant, names } = this.props;
    this.WrappedDescendant = connectors[type]({ ...containers[name], names })(Descendant);
  }


  render() {
    const { WrappedDescendant } = this;
    const { Descendant, name, names, type, ...otherProps } = this.props;
    return <WrappedDescendant {...otherProps} />;
  }
}


ConnectorHoc.propTypes = {
  Descendant: func.isRequired,
  name: string.isRequired,
  names: array,
  type: string.isRequired,
};

ConnectorHoc.defaultProps = {
  names: [],
};

ConnectorHoc.contextType = Context;


const wrapper = createWrapper(ConnectorHoc);

export const connectorTypes = keys(connectors);

export default curry((commonParams, connectorParams) => wrapper({ ...commonParams, ...connectorParams }), 2);
