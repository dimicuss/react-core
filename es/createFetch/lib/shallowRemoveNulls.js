import flow from 'lodash/flow';
import isNil from 'lodash/isNil';
import negate from 'lodash/negate';
import fpPickBy from 'lodash/fp/pickBy';
import overSome from 'lodash/overSome';
import isString from 'lodash/isString';


const predicates = [
  negate(isNil),
  isString,
];


export default flow([
  overSome,
  fpPickBy,
])(predicates);
