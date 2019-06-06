import { stringify } from 'query-string';

import cond from 'lodash/cond';
import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';
import isEmpty from 'lodash/isEmpty';
import stubTrue from 'lodash/stubTrue';
import isString from 'lodash/isString';
import overEvery from 'lodash/overEvery';
import stubFalse from 'lodash/stubFalse';


const predicate = cond([
  [
    overEvery([isString, isEmpty]),
    stubFalse,
  ],
  [
    isNil,
    stubFalse,
  ],
  [
    stubTrue,
    stubTrue,
  ]
]);


export default function createPath(path, fields, properties = {}, query = {}) {
  const handledQuery = pickBy(query, predicate);
  return [
    fields.reduce((acc, key) => acc.replace(`{${key}}`, properties[key] || ''), path),
    stringify(handledQuery),
  ]
    .filter(str => str !== '')
    .join('?');
}
