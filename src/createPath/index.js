import { stringify } from 'query-string';
import { pickBy, overEvery, cond, stubTrue, stubFalse, isNil, isString, isEmpty } from 'lodash';


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
