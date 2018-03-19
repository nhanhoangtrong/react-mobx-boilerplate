import React from 'react';
import DevTools from 'mobx-react-devtools';
import AppRouter from './modules/app-router/AppRouter';
import App from './components/app/App';
import { hot } from 'react-hot-loader';

const Root = () => (
    <App>
        <DevTools />
        <AppRouter />
    </App>
);

export default hot(module)(Root);
