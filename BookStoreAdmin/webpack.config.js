'use strict';
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/main.js',
    plugins: [
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: false
    })
    ],
    output: {
        filename:'./src/bundle.js'
    }
}