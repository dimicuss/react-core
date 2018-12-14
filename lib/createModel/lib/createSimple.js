import { flow } from 'lodash';
import handleNil from './handleNil';
import createWrapper from './createWrapper';

const createSimpleType = property => property;


export default flow([
  handleNil,
  createWrapper,
])(createSimpleType);
