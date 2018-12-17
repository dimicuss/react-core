const fs = require('fs');
const path = require('path');
const readDirRecursive = require('fs-readdir-recursive');
const { dependencies } = JSON.parse(fs.readFileSync('./package.json'));


const srcName = 'src';
const indexRegEx = /index\.js$/;
const isProduction = process.env.NODE_ENV === 'production';


const entry = readDirRecursive(srcName)
  .filter(name => name.match(indexRegEx) !== null)
  .reduce((acc, name) => { acc[name] = path.resolve(srcName, name); return acc; }, {});


module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['react', 'env', 'stage-0'] },
        exclude: /node_modules/,
      }
    ],
  },
  resolve: { extensions: ['.js'] },
  externals: Object.keys(dependencies),
  mode: isProduction ? 'production' : 'development',
};
