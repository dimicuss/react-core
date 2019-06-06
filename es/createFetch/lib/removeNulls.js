import map from 'lodash/map';
import cond from 'lodash/cond';
import flow from 'lodash/flow';
import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';
import isArray from 'lodash/isArray';
import stubTrue from 'lodash/stubTrue';
import mapValues from 'lodash/mapValues';
import isPlainObject from 'lodash/isPlainObject';


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
