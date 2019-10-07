import get from 'lodash/get';
import curry from 'lodash/curry';
import mapValues from 'lodash/mapValues';
import isPlainObject from 'lodash/isPlainObject';

import createMapCreator from './lib/createMapCreator';
import createListCreator from './lib/createListCreator';
import attachModelCreator from './lib/attachModelCreator';
import createRecordCreator from './lib/createRecordCreator';
import createDefaultCreator from './lib/createDefaultCreator';
import createPropertyModelCreators from './lib/createPropertyModelCreators';


function createModelCreator(additionalConfig, config) {
  const handledConfig = isPlainObject(config) ? config : { type: config };
  const { type } = handledConfig;
  // console.log(handledConfig);


  if (type === 'object') {
    const { properties, entity, routeEntity } = handledConfig;
    const { entityExpansions, routeExpansions } = additionalConfig;

    const modelCreators = mapValues(
      properties,
      createPropertyModelCreators(createModelCreator, additionalConfig),
    );

    const expansionOptions = {
      ...get(entityExpansions, entity, {}),
      ...get(routeExpansions, routeEntity, {})
    };

    return attachModelCreator(
      createRecordCreator({ ...expansionOptions, properties, modelCreators }),
      modelCreators,
    );
  }


  if (type === 'array') {
    const { items } = handledConfig;
    const modelCreator = createModelCreator(additionalConfig, items);

    return attachModelCreator(
      createListCreator({ modelCreator }),
      modelCreator,
    );
  }


  if (type === 'map') {
    const { items } = handledConfig;
    const modelCreator = createModelCreator(additionalConfig, items);

    return attachModelCreator(
      createMapCreator({ modelCreator }),
      modelCreator,
    );
  }


  return createDefaultCreator(handledConfig);
}


export default curry(createModelCreator);
