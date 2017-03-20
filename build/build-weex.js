/**
 * Created by xiangwenwen on 2017/2/8.
 */

var webpack = require('webpack');
var webpackConfig = require('./webpack.weex.prod.conf');


webpack(webpackConfig,function (err, stats) {
    if (err) {
        throw err
    }
});