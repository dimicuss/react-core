import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import readDirRecursive from 'fs-readdir-recursive';


const srcName = 'src';
const indexRegEx = /index\.js$/;
const plugins = [
  resolve({ extensions: ['js'] }),
  babel(),
];


export default readDirRecursive(srcName)
  .filter(name => name.match(indexRegEx) !== null)
  .map((input) => ({
    input: path.join(srcName, input),
    plugins,
    output: {
      file: path.join('build', input),
      format,
    },
  }))
