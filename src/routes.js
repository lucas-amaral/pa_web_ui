import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import Dashboard from './pages/Dashboard';

import { isAuthenticated } from './utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
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
  const { enqueueSnackbar } = useSnackbar();
  const notification = useSelector((state) => state.main.notification);

  useEffect(() => {
    if (notification) {
      enqueueSnackbar(notification.message, {
        variant: notification.variant,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification]);

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
