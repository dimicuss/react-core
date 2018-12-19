import { Record } from 'immutable';
import { parse, stringify } from 'query-string';

import pickBy from 'lodash/fp/pickBy';
import { flow, negate, isEmpty, mapValues, identity, isNumber, cond, stubTrue, curry } from 'lodash';

import normalize from '../normalize';


const trulyIsEmpty = cond([
  [
    isNumber,
    value => value === 0,
  ],
  [
    stubTrue,
    isEmpty,
  ]
]);
const getNotEmpty = pickBy(negate(trulyIsEmpty));


function createUrlHandler(propsToPass, createExpansion) {
  const definition = createExpansion(propsToPass);

  const defaults = mapValues(definition, ({ default: deflt }) => deflt === undefined ? null : deflt);

  const parseQuery = flow([
    getNotEmpty,
    normalize(mapValues(definition, ({ fromQuery }) => fromQuery || identity)),
  ]);

  const stringifyQueryString = flow([
    getNotEmpty,
    normalize(mapValues(definition, ({ toQuery }) => toQuery || identity)),
  ]);

  return class UrlHandler extends Record(defaults) {
    static parse(queryString, additional) {
      const parsedQuery = parseQuery({
        ...parse(queryString),
        ...additional,
      });

      return new UrlHandler(mapValues(defaults, (value, key) => parsedQuery[key] || defaults[key]));
    }


    stringify() {
      return stringifyQueryString(this.toJS());
    }


    toString() {
      return stringify(this.stringify());
    }
  };
}


export default curry(createUrlHandler);
