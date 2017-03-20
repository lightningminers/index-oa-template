/**
 * Created by xiangwenwen on 2017/2/8.
 */


var config = {
    entry: {
        home: './src/pages/index.vue?entry=true'
    },
    output: {
        path: 'dist',
        filename: 'weex-[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue(\?[^?]+)?$/,
                loaders: ['weex-loader']
            }
        ]
    }
};

module.exports = config;