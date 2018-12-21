import React from 'react';
import { curry } from 'lodash';


function createSagaInjector(store, { sagaName: key, saga }, Descendant) {
  class InjectSaga extends React.Component {
    componentDidMount() {
      const hasSaga = Reflect.has(store.injectedSagas, key);

      if (!hasSaga) {
        store.injectedSagas[key] = {
          saga,
          task: store.runSaga(saga)
        }
      }
    }


    componentWillUnmount() {
      if (Reflect.has(store.injectedSagas, key)) {
        const descriptor = store.injectedSagas[key];
        descriptor.task.cancel()
      }
    }


    render() {
      return <Descendant {...this.props} />;
    }
  }


  return InjectSaga;
}


export default curry(createSagaInjector);
