const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'lib');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: ['./index.js']
    },
    devtool: 'source-map',
    output: {
        libraryTarget: "umd",
        path: BUILD_DIR,
        filename: 'index.js',
        publicPath: 'lib'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: SRC_DIR,
            exclude: /(node_modules)/,

            loader: 'babel-loader',
            query: {
                presets: [
                    'babel-preset-es2015',
                    'babel-preset-react',
                    'babel-preset-stage-0',
                ].map(require.resolve)
            }
        }]
    }
};
