import { createActions, createReducer } from 'reduxsauce';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    updateProperty: ['payload'],
    succeededProperty: ['payload'],
    loadingProperty: [],
    resetSuccessProperty: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
    property: {
        user: {
            username: null,
        },
        address: {
            street: {},
        },
    },
    loading: false,
    success: false,
};

/*
    Criando os reducer handlers
*/
const succeededProperty = (state = INITIAL_STATE, action) => {
    return {
        type: action.type,
        property: {
            ...action.payload,
        },
        loading: false,
        success: true,
    };
};

const updateProperty = (state = INITIAL_STATE, payload) => {
    return {
        type: payload.type,
        property: {
            ...payload.payload,
        },
    };
};

const loadingProperty = (state = INITIAL_STATE) => {
    return { ...state, loading: true, success: false };
};

const resetSuccessProperty = (state = INITIAL_STATE) => {
    return { ...state, loading: false, success: false };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.SUCCEEDED_PROPERTY]: succeededProperty,
    [Types.UPDATE_PROPERTY]: updateProperty,
    [Types.LOADING_PROPERTY]: loadingProperty,
    [Types.RESET_SUCCESS_PROPERTY]: resetSuccessProperty,
});
