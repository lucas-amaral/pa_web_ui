import { createActions, createReducer } from 'reduxsauce';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    updateStreet: ['payload'],
    loadStreet: [],
});

const INITIAL_STATE = {
    street: {},
};

const updateStreet = (state = INITIAL_STATE, payload) => {
    return {
        street: payload,
    };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.UPDATE_STREET]: updateStreet,
});
