import get from 'lodash/get';


const regExp = /{([\w.]+)}/;


function getAllMatches(text, matches = []) {
  const match = get(regExp.exec(text), 1, null);
  return match
    ? getAllMatches(text.replace(regExp, ''), [...matches, match])
    : matches;
}


function createTitle(title = '', options = {}) {
  return getAllMatches(title).reduce(
    (acc, path) => acc.replace(`{${path}}`, get(options, path, '')),
    title,
  );
}


export default createTitle;
