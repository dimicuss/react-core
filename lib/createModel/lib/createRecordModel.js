import { Record } from 'immutable';
import { mapValues, constant, toPairs, identity, flow } from 'lodash';

import createMapHandler from './createMapHandler';


const stubUndefined = constant(undefined);


export default function createEntityModel({ type, normalizers = {}, extenders = {}, methods = {}, name, propCreators = {} }) {
  const possibleFields = {
    ...mapValues(type.properties, stubUndefined),
    ...mapValues(extenders, stubUndefined),
  };

  const RecordInstance = Record(possibleFields, name);
  const normalize = flow([
    properties => mapValues(propCreators, (creator, propName) => creator(properties[propName])),
    createMapHandler(normalizers)
  ]);
  const extend = createMapHandler(extenders);


  class RecordModel extends RecordInstance {
    constructor(...rest) {
      const [properties, ...restTail] = rest;

      const handledProperties = {
        ...extend(properties),
        ...normalize(properties),
      };

      super(handledProperties, ...restTail);
    }


    setProperties(properties) {
      return toPairs(properties).reduce(
        (acc, [propName, propValue]) => acc.set(propName, propValue),
        this,
      );
    }


    set(propName, value) {
      const creator = propCreators[propName] || identity;
      return super.set(propName, creator(value));
    }


    hardSet(...rest) {
      return super.set(...rest);
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
