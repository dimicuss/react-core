import { Map } from 'immutable'
import curry from 'lodash/curry';
import partial from 'lodash/partial';
import mapValues from 'lodash/mapValues'


function createPropertyModel(modelCreator, data) {
  return modelCreator(data);
}


function createMapCreator({ modelCreator }, data = {}) {
  return Map(
    mapValues(data, partial(createPropertyModel, modelCreator))
  );
}


export default curry(createMapCreator, 2);