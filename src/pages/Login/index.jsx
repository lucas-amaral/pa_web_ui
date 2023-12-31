import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginComponent from './components/login';
import {
  LOADING_LOGIN,
  LOGIN_REQUESTED,
  SET_INITIAL_STATE,
} from '../../constants/ActionTypes';

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const statusLogin = useSelector((state) => state.login);

  useEffect(() => {
    if (statusLogin.state.logged) {
      dispatch({
        type: SET_INITIAL_STATE,
      });
      history.push('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, statusLogin.state]);

  const onSubmit = (data) => {
    dispatch({
      type: LOADING_LOGIN,
    });
    dispatch({
      type: LOGIN_REQUESTED,
      data: {
        username: data.username,
        password: data.password,
      },
    });
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      loginInvalid={statusLogin.loginFailed}
    />
  );
}

export default Login;
