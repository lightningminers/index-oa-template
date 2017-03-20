/**
 * Created by xiangwenwen on 2017/2/8.
 */

// { "framework": "Vue" }

var webpack = require('webpack');

var config = {
    entry: {
        'vue-bundle': './src/weex.entry.js?entry=true'
    },
    output: {
        path: 'dist',
        filename: '[name].weex.js'
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
    plugins: [
        new webpack.BannerPlugin({
             raw: true ,
             banner: '// { "framework": "Vue" }\n'
         })
    ],
    watch: true
};

module.exports = config;
