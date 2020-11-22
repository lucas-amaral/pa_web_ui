import { createActions, createReducer } from 'reduxsauce';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    updateUser: ['payload'],
    sendUser: [],
    userSucceeded: ['payload'],
    loadUser: ['username'],
    setInitialState: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
    users: [],
    user: {},
};

const updateUser = (state = INITIAL_STATE, payload) => {
    return {
        user: payload,
    };
};

const userSucceeded = (state = INITIAL_STATE, payload) => {
    return {
        user: payload,
    };
};

const setInitialState = (state = INITIAL_STATE) => {
    return state;
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.UPDATE_USER]: updateUser,
    [Types.USER_SUCCEEDED]: userSucceeded,
    [Types.SET_INITIAL_STATE]: setInitialState,
});
