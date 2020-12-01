import { createActions, createReducer } from 'reduxsauce';
import {
    LOADING_USER,
    RESET_SUCCESS_USER,
    UPDATE_USER,
    USER_SUCCEEDED,
} from '../../constants/ActionTypes';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    updateUser: ['payload'],
    userSucceeded: ['payload'],
    loadUser: ['username'],
    loadingUser: [],
    resetSuccessUser: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
    users: [],
    user: {
        address: {
            street: {
                name: ' ',
            },
        },
    },
    loading: false,
    success: false,
};

const updateUser = (state = INITIAL_STATE, payload) => {
    return {
        type: payload.type,
        user: payload.payload,
    };
};

const userSucceeded = (state = INITIAL_STATE, action) => {
    return {
        type: action.type,
        user: action.payload,
        loading: false,
        success: true,
    };
};

const loadingUser = (state = INITIAL_STATE) => {
    return { ...state, loading: true, success: false };
};

const resetSuccessUser = (state = INITIAL_STATE) => {
    return { ...state, loading: false, success: false };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [UPDATE_USER]: updateUser,
    [USER_SUCCEEDED]: userSucceeded,
    [LOADING_USER]: loadingUser,
    [RESET_SUCCESS_USER]: resetSuccessUser,
});
