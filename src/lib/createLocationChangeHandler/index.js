import { delay } from 'redux-saga';
import { LOCATION_CHANGE } from 'connected-react-router';
import { takeEvery, select, fork } from 'redux-saga/effects';

import { selectRouter } from '../../constants/selectors/selectors';


export default function createLocationChangeHandler(baseRouteName, handler) {
  function* wrappedHandler(...rest) {
    const { routeName, changed } = yield select(selectRouter);
    (routeName === baseRouteName) && changed && (yield handler(...rest));
  }

  function* createEventHandler() {
    yield delay(0);
    yield takeEvery(LOCATION_CHANGE, wrappedHandler);
  }

  return fork(createEventHandler);
}
