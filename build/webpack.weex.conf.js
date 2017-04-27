/**
 * Created by xiangwenwen on 2017/2/8.
 */

// { "framework": "Vue" }

var webpack = require('webpack');
var path = require('path');
var env = process.env.NODE_ENV;

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var watch = true;
var plugins = [];
if (env === 'production'){
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
    plugins.push(
        new webpack.DefinePlugin({
          'process.env': env
        })
    );
    watch = false;
}

plugins.push(
    new webpack.BannerPlugin({
         raw: true ,
         banner: '// { "framework": "Vue" }\n'
    })
);

var config = {
    entry: {
        'weex-bundle': './src/platforms/weex/weex.entry.js?entry=true'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue(\?[^?]+)?$/,
                loaders: ['weex-loader'],
                exclude: /node_modules/
            },
            {
              test: /\.js$/,
              loaders: ['babel-loader'],
              exclude: /node_modules/
            }
        ]
    },
    plugins: plugins,
    resolve: {
        alias: {}
    },
    watch: watch
};

module.exports = config;
