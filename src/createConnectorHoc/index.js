import React from 'react';
import { join, curry } from 'lodash';
import { func, string } from 'prop-types';

import createWrapper from '../createWrapper'
import { getContainer, createKey } from '../registry';


class ConnectorHoc extends React.PureComponent {
  constructor(props) {
    super(props);
    const { name, type, keyGetter, Descendant } = props;
    const key = createKey(keyGetter(props), name);
    this.WrappedDescendant = getContainer(key)[type](Descendant);
  }


  render() {
    const { WrappedDescendant } = this;
    const { Descendant, name, type, keyGetter, ...otherProps } = this.props;
    return <WrappedDescendant {...otherProps} />
  }
}


ConnectorHoc.propTypes = {
  Descendant: func.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  keyGetter: func.isRequired,
};


const wrapper = createWrapper(ConnectorHoc);


export default curry(
  function createConnectorHoc(commonParams, connectorParams) {
    return wrapper({ ...commonParams, ...connectorParams });
  }
)