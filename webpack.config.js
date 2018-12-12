var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        main: './app/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
            }
        ]
    }
}