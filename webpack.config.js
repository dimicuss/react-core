const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
	entry: {
		index: path.resolve('src', 'index'),
	},
	output: {
		path: path.resolve('dist'),
		filename: '[name].js',
		library: 'react-core-utils',
		libraryTarget: 'umd',
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
	externals: [nodeExternals()],
};
