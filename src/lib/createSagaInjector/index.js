import React from 'react';
import { curry } from 'lodash';


const DAEMON = '@@saga-injector/daemon';
const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';


function createSagaInjector(store, { sagaName: key, saga, sagaMode = RESTART_ON_REMOUNT }, Descendant) {
  class InjectSaga extends React.Component {
    componentWillMount() {
      const hasSaga = Reflect.has(store.injectedSagas, key);

      if (!hasSaga || (hasSaga && sagaMode !== DAEMON && sagaMode !== ONCE_TILL_UNMOUNT)) {
        store.injectedSagas[key] = { // eslint-disable-line no-param-reassign
          saga,
          mode: sagaMode,
          task: store.runSaga(saga)
        };
      }
    }


    componentWillUnmount() {
      if (Reflect.has(store.injectedSagas, key)) {
        const descriptor = store.injectedSagas[key];
        if (descriptor.mode !== DAEMON) { descriptor.task.cancel(); }
      }
    }


    render() {
      return <Descendant {...this.props} />;
    }
  }


  return InjectSaga;
}


export default curry(createSagaInjector);
