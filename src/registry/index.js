import fpJoin from 'lodash/fp/join';
import fpFilter from 'lodash/fp/filter';
import { flow } from 'lodash';


const containerRegistry = {};


export const createKey = flow([
  (...key) => key,
  fpFilter(key => key !== ''),
  fpJoin('|')
]);


export function addContainer(key, container) {
  containerRegistry[key] = container;
}


export function removeContainer(keyToRemove) {
  containerRegistry[keyToRemove] = undefined;
}


export function getContainer(...key) {
  return containerRegistry[createKey(...key)];
}


export function getContainers() {
  return containerRegistry;
}

export { containerRegistry };
