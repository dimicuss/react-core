import { call } from 'redux-saga/effects';
import { stringify } from 'query-string';
import { cond, flow } from 'lodash';


import toFormData from './lib/toFormData';
import removeNulls from './lib/removeNulls';
import shallowRemoveNulls from './lib/shallowRemoveNulls';
import createFetchErrorHandler from './lib/createFetchErrorHandler';


const commonFetchOptions = {
  credentials: 'same-origin',
  headers: {
    accept: 'application/json',
    'cache-control': 'no-cache',
    'x-requested-With': 'XMLHttpRequest',
  },
};

const getType = 'GET';
const postType = 'POST';

const get = (url, options = {}) => fetch(url, { method: getType, ...commonFetchOptions, ...options });
const post = (url, options = {}) => fetch(url, { method: postType, ...commonFetchOptions, ...options });


export default cond([
  [
    ({ type }) => type === getType,
    ({ url }) => function* getFetch(data) {
      const handledData = flow([removeNulls, stringify])(data);
      const handledUrl = handledData !== '' ? [url, handledData].join('?') : url;
      return yield flow([get, createFetchErrorHandler, call])(handledUrl);
    }
  ],
  [
    ({ type }) => type === postType,
    ({ url }) => function* postFetch(data) {
      const handledData = flow([shallowRemoveNulls, toFormData])(data);
      return yield flow([post, createFetchErrorHandler, call])(url, { body: handledData });
    }
  ],
]);
