const path = require('path');
const packageJSON = require('./package');

const externals = Object.keys(packageJSON.dependencies).flatMap((dependency) => {
	return [
		new RegExp(`^${dependency}$`),
		new RegExp(`^${dependency}\/.+$`),
	];
});



function testRequest(external) {
	return external.test(this);
}


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
	externals: [
		function handleRequest(context, request, callback) {
			if (externals.some(testRequest, request)) {
				callback(null, `commonjs ${request}`);
			} else {
				callback();
			}
		}
	]
};
