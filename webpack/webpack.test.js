const base = require('./webpack.base');
const merge = require('webpack-merge');
const {
	getStyleLoaders
} = require('./webpack.js');

const config = merge(base, {
	devtool: '#inline-source-map',
	module: {
		rules: [{
			test: /(\.css|\.scss)/,
			exclude: /node_modules/,
			use: [
				'style-loader'
			].concat(getStyleLoaders())
		}]
	}
});


delete config.entry;

module.exports = config;