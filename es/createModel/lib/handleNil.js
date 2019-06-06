import tail from 'lodash/tail';
import isNil from 'lodash/isNil';


const typeValueMap = {
  array: [],
  date: '',
  object: {},
  string: '',
  integer: null,
  datetime: null,
  image: null,
  boolean: false,
};


export default function createNilHandler(fn) {
  return function handleNil(...rest) {
    const [properties, definitions, types] = rest; // eslint-disable-line no-unused-vars
    const { type } = types;
    const defaultValue = typeValueMap[type];
    return isNil(properties) ? fn(defaultValue, ...tail(rest)) : fn(...rest);
  };
}
