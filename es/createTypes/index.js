import pick from 'lodash/pick';
import keys from 'lodash/keys';
import cond from 'lodash/cond';
import isNil from 'lodash/isNil';
import clone from 'lodash/clone';
import partial from 'lodash/partial';
import isEmpty from 'lodash/isEmpty';
import stubTrue from 'lodash/stubTrue';
import isString from 'lodash/isString';
import identity from 'lodash/identity';
import overEvery from 'lodash/overEvery';
import mapValues from 'lodash/mapValues';
import assignWith from 'lodash/assignWith';
import intersection from 'lodash/intersection';
import isPlainObject from 'lodash/isPlainObject';


import createConfigMerge from './createConfigMerge';


export default function createTypes(api, entities) {
  const mergeConfig = createConfigMerge(['entity']);
  const handleObject = fn => object => fn(clone(object));

  const hasEntity = ({ entity, routeEntity }) => entities[entity] !== undefined || api[routeEntity] !== undefined;
  const isArray = obj => isPlainObject(obj) && obj.type === 'array';
  const isObject = obj => isPlainObject(obj) && obj.type === 'object';


  const handleAssign = cond([
    [
      objectVal => objectVal === null,
      (objectVal, entityVal) => entityVal,
    ],
    [
      stubTrue,
      objectVal => objectVal,
    ],
  ]);


  const createType = cond([
    [isNil, identity],
    [
      overEvery([isObject, hasEntity]),
      handleObject((object) => {
        const { entity, properties = {} } = object;
        const entityObject = entities[entity];
        const { properties: entityProperties = {} } = entityObject;

        if (isEmpty(properties)) {
          return {
            ...object,
            properties: mapValues(entityProperties, createType),
          };
        }

        const possibleKeys = intersection(
          keys(properties),
          keys(entityProperties),
        );

        const propertiesWithEntities = mapValues(
          properties,
          (config, key) => mergeConfig(config, entityProperties[key])
        );

        const newProperties = assignWith(
          {},
          propertiesWithEntities,
          pick(entityProperties, possibleKeys),
          handleAssign
        );

        return {
          ...object,
          properties: mapValues(newProperties, createType)
        };
      }),
    ],
    [
      isArray,
      handleObject((object) => {
        const { items = {} } = object;
        return { ...object, items: createType(items) };
      }),
    ],
    [
      isObject,
      handleObject((object) => {
        const { properties = {} } = object;
        return { ...object, properties: mapValues(properties, createType) };
      })
    ],
    [
      isString,
      type => ({ type }),
    ],
    [stubTrue, identity]
  ]);


  function handleRequest(request, map, requestNormalizers) {
    return mapValues(request, (value, key) => {
      const normalizer = requestNormalizers[key] || identity;
      return normalizer(map.get(key));
    });
  }


  return mapValues(api, route => ({
    path: route.path,
    request: route.request,
    response: createType(route.response),
    handleRequest: partial(handleRequest, route.request),
  }));
}