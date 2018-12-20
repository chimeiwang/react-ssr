var path = require('path');

const WebpackBase = {
    mode: 'production',
    entry: {
        main: './app/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '../dist'),
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
        ]
    },
}
module.exports = WebpackBase;