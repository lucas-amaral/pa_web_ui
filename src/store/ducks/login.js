import { createActions, createReducer } from 'reduxsauce';
import { AUTH_TOKEN } from '../../constants/Headers';
import { LOADING_LOGIN } from '../../constants/ActionTypes';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
  loginSucceeded: ['payload'],
  loginFailed: ['message'],
  loginRequested: ['payload'],
  logoff: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
  state: {
    logged: false,
    expirationTime: 0,
    token: '',
    tokenExpired: false,
  },
  loginFailed: false,
  loading: false,
  success: false,
};

const LOGIN_SUCCESS = (token) => {
  return {
    state: {
      logged: true,
      expirationTime: 500,
      token,
      tokenExpired: false,
    },
    loginFailed: false,
    loading: false,
  };
};

const LOGIN_FAILED = (state = INITIAL_STATE) => {
  return { ...state, loginFailed: true, loading: false };
};

/*
    Criando os reducer handlers
*/
const loginSucceeded = (state = INITIAL_STATE, payload) => {
  const response = payload.payload;
  if (response.status === 200) {
    const token = response.headers[AUTH_TOKEN];
    localStorage.setItem('token', token);
    localStorage.setItem('username', response.config.auth.username);

    return LOGIN_SUCCESS(token);
  }
  return LOGIN_FAILED(state);
};

const loginFailed = (state = INITIAL_STATE) => {
  return LOGIN_FAILED(state);
};

const loadingLogin = (state = INITIAL_STATE) => {
  return { ...state, loading: true, success: false };
};

const doLogoff = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  return INITIAL_STATE;
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCEEDED]: loginSucceeded,
  [Types.LOGIN_FAILED]: loginFailed,
  [Types.LOGOFF]: doLogoff,
  [LOADING_LOGIN]: loadingLogin,
});
