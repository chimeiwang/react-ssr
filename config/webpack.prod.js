var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var base = require('./webpack.base');
var merge = require('webpack-merge');
const webpackConfig = merge(base,{
    module: {
        rules: [
            {
                test:/\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            },
        ]
    },
    plugins:[
        require('autoprefixer'),
        new ExtractTextPlugin('main.css')
    ]
})
module.exports = webpackConfig