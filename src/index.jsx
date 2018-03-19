// This is the main entry, where we put all the initialize commands
import React from 'react';
import ReactDOM from 'react-dom';

const { default: Root } = require(process.env.NODE_ENV === 'production'
    ? './Root.prod'
    : './Root.dev');

ReactDOM.render(<Root />, document.getElementById('root'));
