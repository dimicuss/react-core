import React from 'react';
import { curry } from 'lodash';

import createWrapper from '../createWrapper';


class PropsPasserHoc extends React.PureComponent {
  render() {
    const { Descendant, ...otherProps } = this.props;
    return <Descendant {...otherProps} />;
  }
}


const Wrapper = createWrapper(PropsPasserHoc);


export const ReversedPasser = curry(
  function reversedPasser(...rest) {
    return Wrapper(...rest.reverse());
  },
  2,
);


export default Wrapper;