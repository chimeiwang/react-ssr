
var base = require('./webpack.base');
var merge = require('webpack-merge');
const webpackConfig = merge(base,{
    module: {
        rules: [
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
        ]
    }
})
module.exports = webpackConfig