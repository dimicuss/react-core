import fpGet from 'lodash/fp/get';
import fpMap from 'lodash/fp/map';
import fpJoin from 'lodash/fp/join';
import { put } from 'redux-saga/effects';

import cond from 'lodash/cond';
import constant from 'lodash/constant';
import overSome from 'lodash/overSome';
import toPairs from 'lodash/toPairs';
import overEvery from 'lodash/overEvery';
import stubTrue from 'lodash/stubTrue';
import flow from 'lodash/flow';

import { reportOnFetchError } from '../../actions';


const isStatus = statusCode => ({ result }) => statusCode === result.status;
const hasFilterRequest = flow([
  fpGet(['json', 'message']),
  message => message === 'filter_request',
]);


const getMessage = cond([
  [
    isStatus(500),
    flow([
      fpGet(['json', 'hash']),
      hash => `Internal server error #${hash}`
    ]),
  ],
  [
    isStatus(403),
    constant('Access denied'),
  ],
  [
    overEvery([isStatus(400), hasFilterRequest]),
    flow([
      fpGet(['json', 'detail']),
      toPairs,
      fpMap(([field, errorText]) => `"${field}" field - ${errorText}`),
      fpJoin('\n'),
    ]),
  ],
  [
    isStatus(400),
    fpGet(['json', 'message']),
  ],
  [
    overSome([isStatus(404), isStatus(405), isStatus(413)]),
    fpGet(['result', 'statusText']),
  ],
  [
    overSome([isStatus(502), isStatus(503), isStatus(504)]),
    constant('Service unavailable'),
  ],
  [
    stubTrue,
    constant('Unknown error'),
  ],
]);


export default function createFetchErrorHandler(fetchPromise) {
  return function* handleFetchError() {
    const result = yield fetchPromise;
    const { status } = result;
    let json;

    try { json = yield result.json(); } catch (e) { json = {}; }

    if (status !== 200) {
      const message = getMessage({ result, json });
      yield put(reportOnFetchError({ status, message }));
      const error = new Error(message);
      error.json = json;
      throw error;
    }

    return json;
  };
}
