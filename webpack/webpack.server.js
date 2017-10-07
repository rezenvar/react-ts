const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const merge = require('webpack-merge');
const config = require('./webpack.dev');

const {
	root
} = require('./webpack.js');



const serverConfig = {
	devServer: {
		inline: true,
		quiet: true,
		hot: true,
		historyApiFallback: true,
		host: 'localhost',
		port: process.env.PORT,
		contentBase: root('dist'),
		publicPath: '/',
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
	
}



module.exports = merge(config, serverConfig);





