import {
  keys,
  get,
  set,
  concat,
  intersectionWith,
  cloneDeep,
  isObject,
  isFunction,
  negate,
} from 'lodash';


function collectKeys(object) {
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


export default function (config = {}) {
  return (object = {}) => {
    const paths = intersectionWith(
      collectKeys(config),
      collectKeys(object),
      (a, b) => a.join() === b.join(),
    );

    const objectCopy = cloneDeep(object);
    paths.forEach((path) => {
      const configFn = get(config, path);
      const objectValue = get(object, path);
      set(objectCopy, path, configFn(objectValue));
    });

    return objectCopy;
  };
}
