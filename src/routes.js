import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import Dashboard from './pages/Dashboard';

import AuthLayout from './pages/_layouts/auth';
import DefaultLayout from './pages/_layouts/default';

import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('log', isAuthenticated());
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

export default function Routes() {
    const signed = false;

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}
