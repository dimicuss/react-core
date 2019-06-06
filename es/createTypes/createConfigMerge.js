import cond from 'lodash/cond';
import pick from 'lodash/pick';
import some from 'lodash/some';
import isNil from 'lodash/isNil';
import every from 'lodash/every';
import stubTrue from 'lodash/stubTrue';
import identity from 'lodash/identity';
import isString from 'lodash/isString';
import mapValues from 'lodash/mapValues';


const handleConf = cond([
  [
    isNil,
    () => null,
  ],
  [
    isString,
    type => ({ type }),
  ],
  [
    ({ type }) => type === 'array',
    config => ({ items: {}, ...config }),
  ],
  [
    ({ type }) => type === 'object',
    config => ({ properties: {}, ...config }),
  ],
  [
    stubTrue,
    identity,
  ],
]);


function createTypeHandler(f) {
  return (...rest) => {
    const handledRest = rest.map(handleConf);
    return f(...handledRest);
  };
}


function createCompareFunction(compareType) {
  return (...rest) => every(rest, ({ type }) => type === compareType);
}


export default function createConfigMerge(mergeProperties) {
  const configMerge = createTypeHandler(cond([
    [
      (...rest) => some(rest, isNil),
      identity,
    ],
    [
      createCompareFunction('object'),
      (configA, configB) => ({
        ...configA,
        ...pick(configB, mergeProperties),
        properties: mapValues(configA.properties, (config, key) => configMerge(config, configB.properties[key])),
      }),
    ],
    [
      createCompareFunction('array'),
      (configA, configB) => ({
        ...configA,
        ...pick(configB, mergeProperties),
        items: configMerge(configA.items, configB.items),
      }),
    ],
    [
      ({ type: typeA }, { type: typeB }) => typeA !== typeB,
      (configA, configB) => ({
        ...configA,
        ...pick(configB, mergeProperties),
      })
    ],
    [
      stubTrue,
      identity,
    ],
  ]));

  return configMerge;
}

