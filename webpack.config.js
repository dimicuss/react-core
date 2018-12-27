const fs = require('fs');
const path = require('path');
const { dependencies } = JSON.parse(fs.readFileSync('./package.json'));
const isProduction = process.env.NODE_ENV === 'production';
const TerserPlugin = require('terser-webpack-plugin');

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
  optimization: {
    minimizer: [new TerserPlugin({
      terserOptions: {
        keep_fnames: true,
        exclude: /node_modules/,
      },
    })],
  },
  externals,
  mode: isProduction ? 'production' : 'development',
  resolve: { extensions: ['.js'] },
};
