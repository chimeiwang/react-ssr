import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ServerRouter from '../app/router/enter-server'
import template from './template';
import webpack from 'webpack';
import webpackConfig from '../config/webpack.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
const server = express();
let compiler = webpack(webpackConfig)
server.use(express.static(__dirname + '/dist'));
if(process.env.NODE_ENV == 'development'){
    server.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        quiet: true
    }))
    server.use(webpackHotMiddleware(compiler));
}

server.get('*', (req, res) => {
    let context = {};
    let component = ServerRouter.ServerRouter(context, req.url);
    const appString = renderToString(component);

    res.send(template({
        body: appString,
        title: 'Hello World from the server',
    }));
});

server.listen(8080);
console.log('listening');
