import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Hello from './app/hello'
import template from './template';

const server = express();

server.use('/assets', express.static(__dirname + '/dist'));
server.get('/', (req, res) => {
  const appString = renderToString(<Hello/>);

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
  }));
});

server.listen(8080);
console.log('listening');
