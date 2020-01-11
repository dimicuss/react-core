import React from 'react';


export default (Wrapper: Function) => (props: object = {}) => (Descendant: Function): Function => {
    class WrapperInvoker extends React.PureComponent {
        props: object;

        render() {
            return <Wrapper {...this.props} {...props} Descendant={Descendant} />;
        }
    }

    return WrapperInvoker;
};
