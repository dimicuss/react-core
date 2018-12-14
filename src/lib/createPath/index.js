import { stringify } from 'query-string';


export default function createPath(path, fields, properties = {}, query = {}) {
  return [
    fields.reduce((acc, key) => acc
      .replace(`{${key}}`, properties[key] || ''), path)
      .replace(/\/$/, ''),
    stringify(query),
  ]
    .filter(str => str !== '')
    .join('?');
}
