const webpack = require('webpack');
const path = require('path');
const chalk = require('chalk');

// plugins 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');


const {
    root
} = require('./webpack.js');





const config = {};


config.stats = 'none';


config.entry = [
    root('src/app/vendor.ts'),
    root('src/app/app.tsx')
];


config.output = {
    path: root('dist'),
    filename: 'js/[name].js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
};


config.resolve = {
    alias: {
        img: root('src/public/img'),
        fonts: root('src/public/fonts'),
        styles: root('src/styles')
    },
    modules: [
        root('src/app'),
        'node_modules'
    ],
    extensions: ['.ts', '.css', '.scss', '.tsx', '.js', '.json', '.pug', '.png', '.svg', '.jpg', '.*']
};



config.module = {};



config.module.rules = [
    {
        test: /\.(ts|tsx)$/,
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
        include: root('src'),
        exclude: /node_modules/
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
            loader: 'file-loader',
            options: {
                name: 'img/[name].[ext]'
            }
        },
        {
            loader: 'image-webpack-loader',
            options: {
                pngquant: {
                    quality: '90',
                    speed: 4
                },
                mozjpeg: {
                    progressive: true,
                    quality: 70
                },
                svgo: {

                }
            }
        }
        ]
    },
    {
        test: /\.(woff|woff2|otf|eot|ttf)(\?[a-z0-9=.]+)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    }
];



config.plugins = [
    new webpack.ProvidePlugin({
        React : 'react',
        ReactDOM: 'react-dom'
    }),
    new HtmlWebpackPlugin({
        template: root('src/public/index.html'),
        filename: 'index.html',
        inject: true,
        minify: process.env.NODE_ENV === 'production' && {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        '__DEV__': process.env.__DEV__,
        '__LOCAL__': process.env.__LOCAL__
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new SimpleProgressPlugin({
        progressOptions: {
            clear: true
        }
    })
]






module.exports = config;