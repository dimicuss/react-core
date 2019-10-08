import flow from 'lodash/flow';
import reduce from 'lodash/reduce';
import isArray from 'lodash/isArray';
import partial from 'lodash/partial';
import mapValues from 'lodash/mapValues';
import isPlainObject from 'lodash/isPlainObject';

import { Record } from 'immutable';

import createMapHandler from '../../createMapHandler';


function stubUndefined() {
  return undefined;
}


function setMethod(Model, method, name) {
  Model.prototype[name] = method;
  return Model;
}


function superSetValue(modelCreators, result, value, key) {
  return result.set(key, modelCreators[key](value));
}


function setModelValue(getNextValue, acc, value, key) {
  const nextValue = getNextValue(acc.get(key), value);
  return acc.set(key, nextValue);
}


function setDeep(model, data) {
  console.log(data);
  return isPlainObject(data) || isArray(data)
    ? reduce(data, partial(setModelValue, setDeep), model)
    : data;
}


export default function createRecordCreator({
  methods = {},
  extenders = {},
  properties = {},
  preHandlers = {},
  postHandlers = {},
  modelCreators = {},
}) {
  const possibleFields = mapValues({ ...properties, _extenders: undefined }, stubUndefined);

  const preHandle = createMapHandler(preHandlers);
  const handle = flow([
    createMapHandler(modelCreators),
    createMapHandler(postHandlers),
  ]) ;
  const extend = createMapHandler(extenders);

  class Model extends Record(possibleFields) {
    superSetDeep(data) {
      return reduce(data, partial(superSetValue, modelCreators), this);
    }

    setDeep(data) {
      return setDeep(this, data);
    }
  }

  const ModelWithMethods = reduce(methods, setMethod, Model);

  return function createRecord(data) {
    const preHandledData = preHandle(data);
    const result = handle(preHandledData);
    result._extenders = extend(preHandledData, {});
    return new ModelWithMethods(result);
  };
}
