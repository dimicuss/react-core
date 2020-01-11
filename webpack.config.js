const path = require('path');
const existsSync = require('./webpack/lib/existsSync');


function createModuleEntry(module) {
	return [module, path.resolve('src', module)];
}


const modules = [
	'lib/combineReducers',
	'lib/compose',
	'lib/createHoc',
	'lib/createWrappedHoc',
	'lib/fromEntries',
	'lib/mapValues',
	'lib/passProps',
	'lib/rootSaga',
	'hoc/ContainerHoc',
	'hoc/ConnectorHoc',
	'hoc/ContextConsumerHoc'
];

const extensions = ['.ts', '.tsx', '.js'];
const moduleEntries = modules.map(createModuleEntry);


module.exports = {
	entry: Object.fromEntries(moduleEntries),
	output: {
		filename: '[name].js',
		path: __dirname,
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
	externals: [
		function excludeModules(context, request, callback) {
			const resolvedPath = path.resolve(context, request);
			
			if (existsSync(resolvedPath, extensions)) {
				if (resolvedPath.indexOf(context) > -1) {
					callback()
				} else {
					callback(null, 'commonjs ' + request);
				}
			} else {
				callback(null, 'commonjs ' + request);
			}
		}
	],
	resolve: {
		extensions,
	}
}