import { flow } from 'lodash';

import handleNil from './handleNil';
import createWrapper from './createWrapper';
import handleEmptyDefinitions from './handleEmptyDefinitions';


function createRecord(properties, propCreators, type, Model) {
  return new Model(properties);
}


export default flow([
  handleNil,
  handleEmptyDefinitions,
  createWrapper,
])(createRecord);
