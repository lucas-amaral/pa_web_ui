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
    setLoading: [],
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

const setInitialState = (state = INITIAL_STATE) => {
    return state;
};

const setLoading = (state = INITIAL_STATE) => {
    return { ...state, loading: true, success: false };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.UPDATE_USER]: updateUser,
    [Types.USER_SUCCEEDED]: userSucceeded,
    [Types.SET_INITIAL_STATE]: setInitialState,
    [Types.SET_LOADING]: setLoading,
});
