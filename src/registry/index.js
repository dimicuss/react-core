import fpJoin from 'lodash/fp/join';
import fpFilter from 'lodash/fp/filter'
import { pickBy, flow } from 'lodash';


export let containerRegistry = {};


export const createKey = flow([
  (...key) => key,
  fpFilter(key => key !== ''),
  fpJoin('|')
]);


export function addContainer(key, container) {
  containerRegistry = { ...containerRegistry, [key]: container };
}


export function removeContainer(keyToRemove) {
  containerRegistry = pickBy(containerRegistry, (value, key) => key !== keyToRemove);
}


export function getContainer(...key) {
  return containerRegistry[createKey(...key)];
}


export function getContainers() {
  return containerRegistry;
}