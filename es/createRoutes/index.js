import toPairs from 'lodash/toPairs';


const reactKey = '_react';


export default function handleRoutes(routes, direct) {
  const { _direct: { requirements } } = routes;
  return toPairs(direct)
    .filter(([routeName, route]) => // eslint-disable-line no-unused-vars
      route.defaults !== undefined && route.defaults[reactKey] !== undefined
    )
    .map(([routeName, route]) => { // eslint-disable-line no-unused-vars
      const page = `${route.defaults[reactKey]}Page`;
      const { path } = route;
      const mergedRequirements = {
        ...requirements,
        ...route.requirements,
      };

      const matches = path.match(/\{[a-z0-9_]+\}/gi) || [];

      const handledPath = matches.reduce((acc, match) => {
        const placeholder = match.substr(1, match.length - 2);
        const requirement = mergedRequirements[placeholder];
        const pattern = requirement !== undefined
          ? `:${placeholder}(${requirement})?`
          : `:${placeholder}?`;

        return acc.replace(match, pattern);
      }, path);

      return {
        path: handledPath,
        name: page,
        defaults: route.defaults,
        originalPath: route.path,
      };
    });
}
