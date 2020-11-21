import { createActions, createReducer } from 'reduxsauce';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    updateNeighborhoods: ['payload'],
    updateNeighborhood: ['payload'],
    loadNeighborhoods: [],
    loadNeighborhood: ['id'],
});

const INITIAL_STATE = {
    neighborhoods: [],
};

const updateNeighborhoods = (state = INITIAL_STATE, payload) => {
    return {
        neighborhoods: payload,
    };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.UPDATE_NEIGHBORHOODS]: updateNeighborhoods,
});
