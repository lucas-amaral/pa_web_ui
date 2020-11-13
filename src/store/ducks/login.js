import { createActions, createReducer } from 'reduxsauce';

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
    logged: false,
    expirationTime: 0,
    token: '',
    tokenExpired: false,
};

/*
    Criando os reducer handlers
*/
const loginSucceeded = (state = INITIAL_STATE, payload) => {
    const response = payload.payload;
    if (response.status === 200) {
        const token = response.headers['x-auth-token'];
        localStorage.setItem('token', token);
        localStorage.setItem('username', response.config.auth.username);
        return {
            logged: true,
            expirationTime: 500,
            token,
            tokenExpired: false,
        };
    }
    return {
        logged: false,
        expirationTime: 0,
        token: '',
        tokenExpired: false,
    };
};

const loginFailed = (state = INITIAL_STATE, message) => {
    console.log('failed', message);
    return state;
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
