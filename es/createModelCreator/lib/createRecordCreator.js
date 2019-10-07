import flow from 'lodash/flow';
import reduce from 'lodash/reduce';
import partial from 'lodash/partial';
import mapValues from 'lodash/mapValues';
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


export default function createRecordCreator({ preHandlers = {}, postHandlers = {}, modelCreators = {}, extenders = {}, methods = {}, properties }) {
  const possibleFields = mapValues({ ...properties, _extenders: undefined }, stubUndefined);

  const preHandle = createMapHandler(preHandlers);
  const handle = flow([
    createMapHandler(modelCreators),
    createMapHandler(postHandlers),
  ]) ;
  const extend = createMapHandler(extenders);

  class Model extends Record(possibleFields) {
    superMergeDeep(data) {
      return reduce(data, partial(superSetValue, modelCreators), this);
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
