import get from 'lodash/get';
import set from 'lodash/set';
import keys from 'lodash/keys';
import concat from 'lodash/concat';
import negate from 'lodash/negate';
import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';


function collectPaths(object) {
  const pathsArray = [];

  (function fn(obj, foundKeys = []) {
    const objKeys = keys(obj);

    objKeys.forEach((key) => {
      const nextObject = obj[key];
      const nextFoundKeys = concat(foundKeys, key);

      if (isObject(nextObject) && negate(isFunction)(nextObject)) {
        pathsArray.push(nextFoundKeys);
        fn(nextObject, nextFoundKeys);
      } else {
        pathsArray.push(nextFoundKeys);
      }
    });
  }(object));

  return pathsArray;
}


export default function createMapNormalizer(config = {}) {
  const paths = collectPaths(config);

  return function normalizeMap(map = {}) {
    return paths.reduce((acc, path) => {
      const configFn = get(config, path);
      return {
        ...acc,
        ...set({}, path, configFn(get(map, path), acc))
      };
    }, map);
  };
}
