import ContainerHoc from './hoc/ContainerHoc';
import ConnectorHoc from './hoc/ConnectorHoc';
import ContextConsumer from './hoc/ContextConsumerHoc'

import compose from './lib/compose';
import rootSaga from './lib/rootSaga';
import passProps from './lib/passProps';
import createHoc from './lib/createHoc';
import combineReducers from './lib/combineReducers';
import createWrappedHoc from './lib/createWrappedHoc';


const foo = {
    ContainerHoc,
    ConnectorHoc,
    ContextConsumer,

    compose,
    rootSaga,
    passProps,
    createHoc,
    combineReducers,
    createWrappedHoc,
};


export default foo;
