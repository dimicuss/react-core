const baseRegEx = /\.\/(.+)\/(index\.js)$/;
const baseKeyHandler = (value, key) => key;
const baseValueHandler = value => value.default;


export default function readContext({ context, regEx = baseRegEx, valueHandler = baseValueHandler, keyHandler = baseKeyHandler }) {
  return context.keys().reduce((acc, name) => {
    const key = name.replace(regEx, '$1');
    const value = context(name);
    acc[keyHandler(value, key)] = valueHandler(value, key);
    return acc;
  }, {});
}
