import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Logon from './pages/Logon';
import Panel from './pages/Panel';
// import Proposal from './pages/Proposal';

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
                <Route path="/logon" component={Logon} />
                <Route path="/panel" component={Panel} />
                {/* <Route path="/proposal" component={Proposal} /> */}
            </Switch>
        </BrowserRouter>
    );
}
