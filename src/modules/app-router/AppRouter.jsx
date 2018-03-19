import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ObserverMessageList from '../observer-message-list/ObserverMessageList';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ObserverMessageList} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
