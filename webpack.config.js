var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
        main: './app/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
            },
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
}