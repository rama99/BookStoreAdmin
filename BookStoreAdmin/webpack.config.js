'use strict';
const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = {
    devtool: 'source-map',
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack'
            }
        ]
    },
    plugins: [
    
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: false
    }),
     new AotPlugin({         
          tsConfigPath: 'src\\tsconfig.json',
          mainPath: 'main.ts',         
          "skipCodeGeneration": true
      }), 
    ],
    output: {
        filename:'./src/bundle.js'
    }
}

