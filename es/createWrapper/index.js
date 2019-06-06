import React from 'react';
import curry from 'lodash/curry';
import hoistNonReactStatics from 'hoist-non-react-statics';


function createWrapper(Wrapper, props, Descendant) {
  class WrapperInvoker extends React.PureComponent {
    render() {
      return <Wrapper {...this.props} {...props} Descendant={Descendant} />;
    }
  }

  return hoistNonReactStatics(WrapperInvoker, Descendant);
}


export default curry(createWrapper);
