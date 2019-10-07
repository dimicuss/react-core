import { List } from 'immutable';
import map from 'lodash/map';
import curry from 'lodash/curry';
import partial from 'lodash/partial';


function createItemModel(modelCreator, data) {
  return modelCreator(data);
}


function createListCreator({ modelCreator }, data = []) {
  return List(
    map(data, partial(createItemModel, modelCreator)),
  );
}


export default curry(createListCreator, 2);
