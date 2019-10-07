import curry from 'lodash/curry';


function createPropertyModelCreators(caller, additionalConfig, config) {
  return caller(additionalConfig, config);
}


export default curry(createPropertyModelCreators);
