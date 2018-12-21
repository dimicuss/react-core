const fs = require('fs');
const path = require('path');
const { dependencies } = JSON.parse(fs.readFileSync('./package.json'));

const externals = Object
  .keys(dependencies)
  .reduce((acc, name) => { acc[name] = { commonjs: name, commonjs2: name, amd: name }; return acc; }, {});


module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'index.js') },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
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
  externals,
  mode: 'development',
  resolve: { extensions: ['.js'] },
};
