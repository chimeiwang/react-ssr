import Hello from './hello.js'
import ReactDOM from 'react-dom'
import React from 'react'
import '../pub/home.less';
ReactDOM.hydrate(<Hello />, document.getElementById('root'))