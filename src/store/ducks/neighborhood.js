import { createActions, createReducer } from 'reduxsauce';
import { UPDATE_NEIGHBORHOODS } from '../../constants/ActionTypes';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    updateNeighborhoods: ['payload'],
});

const INITIAL_STATE = {
    neighborhoods: [],
};

const updateNeighborhoods = (state = INITIAL_STATE, action) => {
    return {
        type: action.types,
        neighborhoods: action.payload,
    };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [UPDATE_NEIGHBORHOODS]: updateNeighborhoods,
});
