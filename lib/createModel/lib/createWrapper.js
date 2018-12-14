const createWrapper = fn => (...rest) => properties => fn(properties, ...rest);

export default createWrapper;
