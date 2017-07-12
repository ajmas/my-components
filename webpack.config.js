const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'lib');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: APP_DIR + '/index.js',
    devtool: 'source-map',
    output: {
        library: 'ariaReactComponents',
        path: BUILD_DIR,
        filename: 'index.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                // include: APP_DIR,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'react']
                    }
                }
            }]
    },
    plugins: [
        new CleanWebpackPlugin([BUILD_DIR], {
            root: path.resolve(__dirname),
            verbose: true,
            dry: false,
            exclude: []
        })
    ],
    resolve: {
        extensions: [
            '.js'
        ]
    }
};
