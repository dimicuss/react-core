import { isPlainObject, isArray, cond, stubTrue, flow, map, isNil, mapValues, pickBy } from 'lodash';


const isFalsy = value => isNil(value) || value === '';


const removeNulls = flow([
  cond([
    [
      isArray,
      json => map(json, subJson => removeNulls(subJson)),
    ],
    [
      isPlainObject,
      json => mapValues(json, subJson => removeNulls(subJson)),
    ],
    [
      stubTrue,
      json => json,
    ],
  ]),
  cond([
    [
      isArray,
      json => json.filter(item => !isNil(item)),
    ],
    [
      isPlainObject,
      json => pickBy(json, value => !isNil(value)),
    ],
    [
      stubTrue,
      json => isFalsy(json) ? null : json,
    ],
  ])
]);


export default removeNulls;
