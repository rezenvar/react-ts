const webpack = require('webpack');
const config = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
// plugins
const Visualizer = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


const {
	getStyleLoaders
} = require('./webpack.js');


const prodConfig = {
	devtool: false,
	module: {
		rules: [{
			test: /(\.css|\.scss)/,
			exclude: /node_modules/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: getStyleLoaders(true)
			})
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			minimize: true,
			sourceMap: false
		}),
		new ExtractTextPlugin('style.css'),
		new CleanWebpackPlugin(['dist'], {
			root: process.cwd()
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: (module, count) => {
				return (
					module.resource &&
					/\.js$/.test(module.resource) &&
					module.resource.indexOf(
						path.join(__dirname, '../node_modules')
					) === 0
				)
			}
		}),
		new Visualizer()
	]
}





console.log(process.env.NODE_ENV)
module.exports = merge(config, prodConfig);