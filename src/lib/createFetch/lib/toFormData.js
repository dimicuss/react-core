import { isArray, toPairs, flow } from 'lodash';
import fpReduce from 'lodash/fp/reduce';
import fpPickBy from 'lodash/fp/pickBy';


const prepareArrays = flow([
  fpPickBy(value => isArray(value)),
  toPairs,
  fpReduce((acc, [key, array]) => ([
    ...acc,
    ...array.map(item => [`${key}[]`, item])
  ]), []),
]);

const prepareNotArrays = flow([
  fpPickBy(value => !isArray(value)),
  toPairs,
]);


export default function toFormData(json) {
  const formData = new FormData();
  const foo = [
    ...prepareArrays(json),
    ...prepareNotArrays(json),
  ];

  foo
    .forEach(([key, value]) => formData.append(key, value));

  return formData;
}
