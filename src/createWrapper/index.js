import React from 'react';
import { curry } from 'lodash';
import hoistNonReactStatics from 'hoist-non-react-statics';


function createWrapper(Wrapper, props, Descendant) {
  class WrapperInvoker extends React.PureComponent {
    render() {
      return <Wrapper {...this.props} {...props} Descendant={Descendant} />;
    }
  }

  hoistNonReactStatics(WrapperInvoker, Descendant);

  return WrapperInvoker;
}


export default curry(createWrapper);
