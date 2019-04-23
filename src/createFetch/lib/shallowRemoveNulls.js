import fpPickBy from 'lodash/fp/pickBy';
import { isNil, overSome, isString, negate, flow } from 'lodash';


const predicates = [
  negate(isNil),
  isString,
];


export default flow([
  overSome,
  fpPickBy,
])(predicates);
