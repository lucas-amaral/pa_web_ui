import { createActions, createReducer } from 'reduxsauce';
import { AUTH_TOKEN } from '../../constants/Headers';

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
        return {
            state: {
                logged: true,
                expirationTime: 500,
                token,
                tokenExpired: false
            },
            loginFailed: false
        };
    }
    return {
        state: {
            logged: false,
            expirationTime: 0,
            token: '',
            tokenExpired: false,
        },
        loginFailed: true
    };
};

const loginFailed = (state = INITIAL_STATE, message) => {
    return {
        state: {
            logged: false,
            expirationTime: 0,
            token: '',
            tokenExpired: false,
        },
        loginFailed: true
    };
};

const doLogoff = () => {
    return INITIAL_STATE;
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.LOGIN_SUCCEEDED]: loginSucceeded,
    [Types.LOGIN_FAILED]: loginFailed,
    [Types.LOGOFF]: doLogoff,
});
