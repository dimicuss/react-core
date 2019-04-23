import { isArray, toPairs, flow, isPlainObject } from 'lodash';
import fpReduce from 'lodash/fp/reduce';
import fpPickBy from 'lodash/fp/pickBy';


function stringify(item) {
  return isPlainObject(item)
    ? JSON.stringify(item)
    : item;
}


const prepareArrays = flow([
  fpPickBy(value => isArray(value)),
  toPairs,
  fpReduce((acc, [key, array]) => ([
    ...acc,
    ...array.map(item => [`${key}[]`, stringify(item)])
  ]), []),
]);

const prepareNotArrays = flow([
  fpPickBy(value => !isArray(value)),
  toPairs,
]);


export default function toFormData(json) {
  const formData = new FormData();
  const data = [
    ...prepareArrays(json),
    ...prepareNotArrays(json),
  ];

  data.forEach(([key, value]) => formData.append(key, stringify(value)));

  return formData;
}
