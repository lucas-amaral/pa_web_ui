import { createActions, createReducer } from 'reduxsauce';
import {
    FAILED_NEGOTIATION,
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
const succeededNegotiation = (state = INITIAL_STATE) => {
    return state;
};

const failedNegotiation = (state = INITIAL_STATE) => {
    return { ...state, loading: false, success: false };
};

const updateSaleNegotiations = (state = INITIAL_STATE, payload) => {
    return {
        type: payload.type,
        negotiationsBySale: payload.payload,
        negotiationsByInterest: state.negotiationsByInterest,
    };
};

const updateInterestNegotiations = (state = INITIAL_STATE, payload) => {
    return {
        type: payload.type,
        negotiationsBySale: state.negotiationsBySale,
        negotiationsByInterest: payload.payload,
    };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [SUCCEEDED_NEGOTIATION]: succeededNegotiation,
    [FAILED_NEGOTIATION]: failedNegotiation,
    [UPDATE_SALE_NEGOTIATIONS]: updateSaleNegotiations,
    [UPDATE_INTEREST_NEGOTIATIONS]: updateInterestNegotiations,
});
