import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ServerRouter from '../app/router/enter-server'
import template from './template';
import webpack from 'webpack';
import webpackConfig from '../config/webpack.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
const { matchRoutes } = require("react-router-config");
import hello from "../app/pages/hello";
import hello2 from "../app/pages/hello2";
import TopList from '../app/pages/TopList'
import Loadable from "loadable-components";
import router from "../app/router/index"

const { getLoadableState } = require("loadable-components/server");
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
// const router = [
//     {
//         path: "/",
//         component: Loadable(() => TopList),
//         exact: true
//     },
//     {
//         path: "/one",
//         component: Loadable(() => hello)
//     },
//     {
//         path: "/two",
//         component: Loadable(() => hello2)
//     },
// ];
server.get('*', (req, res) => {

    let context = {};
    let component = ServerRouter.ServerRouter(context, req.url);
    let promises;
    const appString = renderToString(component);
    res.send(template({
        body: appString,
        title: 'Hello World from the server',
    }));
    // getLoadableState(component).then(loadableState => {
    //     let matchs = matchRoutes(router, req.path);
    //
    //     promises = matchs.map(({ route, match }) => {
    //         // const asyncData = route.component.Component.asyncData;
    //         return Promise.resolve(null);
    //     });
    //     Promise.all(promises).then(() => {
    //
    //     }).catch(error => {
    //         console.log(error);
    //         res.status(500).send("Internal server error");
    //     });
    // })

    // const appString = renderToString(component);
    // res.send(template({
    //     body: appString,
    //     title: 'Hello World from the server',
    // }));


});

server.listen(8080);
console.log('listening');
