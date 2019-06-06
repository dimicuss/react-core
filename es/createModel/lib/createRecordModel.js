import { Record } from 'immutable';
import mapValues from 'lodash/mapValues';
import constant from 'lodash/constant';
import toPairs from 'lodash/toPairs';
import identity from 'lodash/identity';
import flow from 'lodash/flow';

import createMapHandler from './createMapHandler';

const extendersKey = '_extenders';
const stubUndefined = constant(undefined);
const extensionDefinition = { _extenders: undefined };
const valueSetter = (acc, [name, value]) => acc.set(name, value);


export default function createEntityModel({ modelName = 'Model', type, preHandlers = {}, postHandlers = {}, extenders = {}, methods = {}, propCreators = {} }) {
  const possibleFields = mapValues({ ...type.properties, ...extensionDefinition }, stubUndefined);
  const extendersFields = mapValues(extenders, stubUndefined);
  const RecordInstance = Record(possibleFields, modelName);
  const ExtendersRecordInstance = Record(extendersFields, `${modelName}-extensions`);

  const preHandle = createMapHandler(preHandlers);

  const handle = flow([
    properties => mapValues(propCreators, (creator, propName) => creator(properties[propName])),
    createMapHandler(postHandlers),
  ]);

  const extend = createMapHandler(extenders);


  class RecordModel extends RecordInstance {
    constructor(properties) {
      const preHandledProps = preHandle(properties);
      const handledProperties = handle(preHandledProps);
      super({ ...handledProperties, _extenders: ExtendersRecordInstance(extend(preHandledProps)) });
    }


    merge(properties) {
      return toPairs(properties).reduce(valueSetter, this);
    }


    set(name, value) {
      const creator = propCreators[name] || identity;
      const newRecord = super.set(name, creator(value));

      if (extenders[name]) {
        return newRecord.setIn([extendersKey, name], extenders[name](value));
      }

      return newRecord;
    }


    hardSet(name, value) {
      const newRecord = super.set(name, value);

      if (extenders[name]) {
        return newRecord.setIn([extendersKey, name], extenders[name](value));
      }

      return newRecord;
    }


    toJS() {
      const jsModel = super.toJS.apply(this);
      return mapValues(type.properties, (value, key) => jsModel[key]);
    }
  }


  toPairs(methods).forEach(([methodName, method]) => {
    RecordModel.prototype[methodName] = method;
  });

  return RecordModel;
}
