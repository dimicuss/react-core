import flow from 'lodash/flow';

import handleNil from './handleNil';
import createWrapper from './createWrapper';


function createList(properties, itemDefinition, type, Model) {
  return new Model(properties);
}


export default flow([
  handleNil,
  createWrapper,
])(createList);
