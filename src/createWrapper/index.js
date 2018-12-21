import React from 'react';
import { curry } from 'lodash';


function createWrapper(Wrapper, props, Descendant) {
  class WrapperInvoker extends React.PureComponent {
    render() {
      return <Wrapper {...this.props} {...props} Descendant={Descendant} />;
    }
  }

  return WrapperInvoker;
}


export default curry(createWrapper);
