import fpMapValues from 'lodash/fp/mapValues';
import { curry, identity, mapValues, flow } from 'lodash';


const createNormalizers = flow([
  curry,
  fpMapValues,
]);


function createFromQueryNormalizer({ fromQuery = identity, initial = '' }, value) {
  return fromQuery(value || initial);
}

function createToQueryNormalizer({ fromQuery = identity, toQuery = identity, initial = '' }, value) {
  return toQuery(fromQuery(value || initial));
}


function createUrlHandler(propsToPass, createExpansion) {
  const definitions = createExpansion(propsToPass);
  const toQueryNormalizer = createNormalizers(createToQueryNormalizer)(definitions);
  const fromQueryNormalizer = createNormalizers(createFromQueryNormalizer)(definitions);

  return function handleUrl(query = {}) {
    const normalizerHandler = (normalize, key) => normalize(query[key]);
    const toQuery = mapValues(toQueryNormalizer, normalizerHandler);
    const fromQuery = mapValues(fromQueryNormalizer, normalizerHandler);

    return {
      toQuery,
      fromQuery,
    };
  };
}


export default curry(createUrlHandler);
