import React from 'react';


export default (Descendant: Function) => (props: object = {}): Function => {
    class WrapperInvoker extends React.PureComponent {
        props: object;


        render() {
            return <Descendant {...this.props} {...props} />
        }
    }


    return WrapperInvoker;
}
