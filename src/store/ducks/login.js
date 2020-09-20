import { createActions, createReducer } from 'reduxsauce';

/*
    Criando action types e creators
*/
export const { Types, Creators } = createActions({
    loginSucceeded: ['payload'],
    loginFailed: ['message'],
    loginRequested: ['payload'],
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

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.LOGIN_SUCCEEDED]: loginSucceeded,
    [Types.LOGIN_FAILED]: loginFailed,
});
