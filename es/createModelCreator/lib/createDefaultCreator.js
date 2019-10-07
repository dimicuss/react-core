import curry from 'lodash/curry';


function createDefaultCreator(config, data) {
  const { default: dflt } = config;
  return data || dflt;
}


export default curry(createDefaultCreator);