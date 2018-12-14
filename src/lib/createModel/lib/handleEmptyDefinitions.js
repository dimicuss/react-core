import { isEmpty } from 'lodash';


export default function createEmptyDefinitionsHandler(fn) {
  return function handleEmptyDefinitions(...rest) {
    const [properties, propDefinitionMap] = rest;
    return isEmpty(propDefinitionMap) ? properties : fn(...rest);
  };
}
