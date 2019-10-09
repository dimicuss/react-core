import curry from 'lodash/curry';
import clone from 'lodash/clone';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';


function createMapHandler(config, data = {}, result = clone(data)) {
  if (isPlainObject(config) || isArray(config)) {
    for (let key in config) {
      result[key] = createMapHandler(config[key], data[key]);
    }
    return result;
  }

  return config(data);
}


export default curry(createMapHandler, 2);
