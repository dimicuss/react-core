import { cond, mapValues, stubTrue, merge, isPlainObject, get, stubObject } from 'lodash';

import createList from './lib/createList';
import createRecord from './lib/createRecord';
import createSimple from './lib/createSimple';
import createListModel from './lib/createListModel';
import createRecordModel from './lib/createRecordModel';


export const isArray = obj => isPlainObject(obj) && obj.type === 'array';
export const isObject = obj => isPlainObject(obj) && obj.type === 'object';


const createModel = cond([
  [
    isObject,
    (type, additional) => {
      const { routeExpansions, entityExpansions } = additional;
      const { properties, entity, routeEntity } = type;
      const propCreators = mapValues(properties, property => createModel(property, additional));

      return createRecord(
        propCreators,
        type,
        createRecordModel({
          ...merge(
            {},
            get(entityExpansions, entity, stubObject),
            get(routeExpansions, routeEntity, stubObject)
          ),
          type,
          propCreators
        }),
      );
    }
  ],
  [
    isArray,
    (type, additional) => {
      const { items } = type;
      const propCreator = createModel(items, additional);
      const Model = createListModel({ propCreator });
      return createList(propCreator, type, Model);
    }
  ],
  [
    stubTrue,
    type => createSimple(null, type),
  ]
]);


export default createModel;
