import { createActions, createReducer } from 'reduxsauce';

/*
    Criando action types e creators
*/
export const { Types, Creators } = createActions({
    messageFetchSucceeded: ['payload'],
    messageFetchFailed: ['message'],
    messageFetchRequested: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = '';

/*
    Criando os reducer handlers
*/
const messageSucceeded = (state = INITIAL_STATE, payload) => {
    console.log('success', payload);
    return state + payload.payload.data;
};

const messageFailed = (state = INITIAL_STATE, message) => {
    console.log('failed', message);
    return state;
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.MESSAGE_FETCH_SUCCEEDED]: messageSucceeded,
    [Types.MESSAGE_FETCH_FAILED]: messageFailed,
});
