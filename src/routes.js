import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';

import AuthLayout from './pages/_layouts/auth';
import DefaultLayout from './pages/_layouts/default';

export default function Routes() {
    const signed = false;

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}
