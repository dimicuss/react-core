import cond from 'lodash/cond';
import flow from 'lodash/flow';
import merge from 'lodash/merge';
import { call } from 'redux-saga/effects';
import { stringify } from 'query-string';

import toFormData from './lib/toFormData';
import removeNulls from './lib/removeNulls';
import shallowRemoveNulls from './lib/shallowRemoveNulls';
import createFetchErrorHandler from './lib/createFetchErrorHandler';


let commonFetchOptions = {
  credentials: 'same-origin',
  headers: {
    accept: 'application/json',
    'cache-control': 'no-cache',
    'x-requested-With': 'XMLHttpRequest',
  },
};

const fetcher = flow([
  (url, options) => fetch(url, merge({}, commonFetchOptions, options)),
  createFetchErrorHandler,
  call,
]);


export function resetCommonFetchOptions(newOptions) {
  commonFetchOptions = merge({}, commonFetchOptions, newOptions);
}


export default cond([
  [
    ({ method }) => method === 'GET',
    ({ method, path }) => function* getFetch(data) {
      const query = flow([removeNulls, stringify])(data);
      const handledPath = query !== '' ? [path, query].join('?') : path;
      return yield fetcher(handledPath, { method });
    }
  ],
  [
    ({ method }) => method === 'POST',
    ({ method, path }) => function* postFetch(data) {
      const body = flow([shallowRemoveNulls, toFormData])(data);
      return yield fetcher(path, { method, body });
    }
  ],
]);
