import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Hello from './app/hello'
import template from './template';
import webpack from 'webpack';
import webpackConfig from './webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
const server = express();
let compiler = webpack(webpackConfig)
server.use(express.static(__dirname + '/dist'));
server.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
}))
server.use(webpackHotMiddleware(compiler));
server.get('/', (req, res) => {
  const appString = renderToString(<Hello/>);
    console.log(123)
  res.send(template({
    body: appString,
    title: 'Hello World from the server',
  }));
});

server.listen(8080);
console.log('listening');
