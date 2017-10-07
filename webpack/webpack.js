const path = require('path');





const root = (pathname) => path.join(__dirname, '../' + pathname);


/**
 * @param {bool} prod
 */
const getStyleLoaders = (prod) => [{
	loader: 'css-loader',
	options: {
		sourceMap: !prod,
		minimize: prod
	}
},
{
	loader: 'autoprefixer-loader',
	options: {
		browsers: ['last 5 versions']
	}
},
	'sass-loader'
];









exports.getStyleLoaders = getStyleLoaders;
exports.root = root;