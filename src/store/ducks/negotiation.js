import { createActions, createReducer } from 'reduxsauce';
import {
    SUCCEEDED_NEGOTIATION,
    UPDATE_INTEREST_NEGOTIATIONS,
    UPDATE_SALE_NEGOTIATIONS,
} from '../../constants/ActionTypes';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    updateSaleNegotiations: ['payload'],
    updateInterestNegotiations: ['payload'],
    succeededNegotiation: ['payload'],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
    negotiationsBySale: [],
    negotiationsByInterest: [],
};

/*
    Criando os reducer handlers
*/
const succeededNegotiation = (state = INITIAL_STATE, action) => {
    return state;
};

const updateSaleNegotiations = (state = INITIAL_STATE, payload) => {
    return {
        type: payload.type,
        negotiationsBySale: payload.data,
        negotiationsByInterest: state.negotiationsByInterest,
    };
};

const updateInterestNegotiations = (state = INITIAL_STATE, payload) => {
    return {
        type: payload.type,
        negotiationsBySale: state.negotiationsBySale,
        negotiationsByInterest: payload.data,
    };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [SUCCEEDED_NEGOTIATION]: succeededNegotiation,
    [UPDATE_SALE_NEGOTIATIONS]: updateSaleNegotiations,
    [UPDATE_INTEREST_NEGOTIATIONS]: updateInterestNegotiations,
});