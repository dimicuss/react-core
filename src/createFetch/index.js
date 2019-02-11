import { call } from 'redux-saga/effects';
import { stringify } from 'query-string';
import { cond, flow } from 'lodash';


import removeNulls from './lib/removeNulls';
import createFetchErrorHandler from './lib/createFetchErrorHandler';

const getType = 'GET';
const postType = 'POST';

const get = (url, options = {}) => fetch(url, { method: getType, ...options });
const post = (url, options = {}) => fetch(url, { method: postType, ...options });


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
      const handledData = flow([removeNulls, JSON.stringify])(data);
      return yield flow([post, createFetchErrorHandler, call])(url, {
        body: handledData,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
    }
  ],
]);
