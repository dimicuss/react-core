const path = require('path');
const packageJSON = require('./package');

const externals = Object.keys(packageJSON.dependencies);

console.log(externals);

module.exports = {
	entry: {
		index: path.resolve('src', 'index'),
	},
	output: {
		path: path.resolve('dist'),
		filename: '[name].js'
	},
	mode: process.env.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@': path.resolve('src'),
		}
	},
	externals,
};
