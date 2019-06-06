import get from 'lodash/get';
import set from 'lodash/set';
import keys from 'lodash/keys';
import concat from 'lodash/concat';
import negate from 'lodash/negate';
import isObject from 'lodash/isObject';
import cloneDeep from 'lodash/cloneDeep';
import isFunction from 'lodash/isFunction';
import intersectionWith from 'lodash/intersectionWith';


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
