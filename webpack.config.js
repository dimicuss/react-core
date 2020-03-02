const path = require('path');
const { dependencies } = require('./package');



const dependenciesRegEx = Object.keys(dependencies).reduce((acc, dependency) => {
	acc.push(
		new RegExp(`^${dependency}$`),
		new RegExp(`^${dependency}\/.+`),
	);
	return acc;
}, [])


function checkRegEx(regEx) {
	return regEx.test(this);
}


function externalizeRequest(context, request, callback) {
	if (dependenciesRegEx.some(checkRegEx, request)) {
		callback(null, `umd ${request}`);
	} else {
		callback();
	}
}



module.exports = {
	devtool: 'cheap-source-map',
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
	externals: [externalizeRequest],
};
