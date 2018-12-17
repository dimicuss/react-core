import { keys, get, concat, isObject, isFunction, negate, set } from 'lodash';


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
      console.log(acc, path, configFn(get(map, path), acc));
      return {
        ...acc,
        ...set({}, path, configFn(get(map, path), acc))
      };
    }, map);
  };
}
