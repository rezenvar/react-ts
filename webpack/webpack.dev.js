const webpack = require('webpack');
const config = require('./webpack.base');
const merge = require('webpack-merge');
const {
	getStyleLoaders
} = require('./webpack.js');

const devConfig = {
	devtool: '#cheap-module-eval-source-map',
	module: {
		rules: [{
	        test: /\.(css|scss)$/,
			// exclude: /node_modules/,
			use: [
				'style-loader'
			].concat(getStyleLoaders())
		}]
	}
};







module.exports = merge(config, devConfig);