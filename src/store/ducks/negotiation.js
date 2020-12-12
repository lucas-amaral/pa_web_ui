import { createActions, createReducer } from 'reduxsauce';
import {
  FAILED_NEGOTIATION,
  RESET_LOADING_DATA_NEGOTIATION,
  SUCCEEDED_BUYER_NEGOTIATION,
  SUCCEEDED_SELLER_NEGOTIATION,
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
  loadingData: true,
  negotiationsBySale: [],
  negotiationsByInterest: [],
};

/*
    Criando os reducer handlers
*/
const succeededBuyerNegotiation = (state = INITIAL_STATE, payload) => {
  return {
    ...state,
    negotiationsByInterest: state.negotiationsByInterest.filter(
      (negotiation) => negotiation.id !== payload.id
    ),
  };
};

const succeededSellerNegotiation = (state = INITIAL_STATE, payload) => {
  return {
    ...state,
    negotiationsBySale: state.negotiationsBySale.filter(
      (negotiation) => negotiation.id !== payload.id
    ),
  };
};

const failedNegotiation = (state = INITIAL_STATE) => {
  return { ...state, loading: false, success: false };
};

const updateSaleNegotiations = (state = INITIAL_STATE, payload) => {
  return {
    type: payload.type,
    negotiationsBySale: payload.payload,
    negotiationsByInterest: state.negotiationsByInterest,
    loadingData: false,
  };
};

const updateInterestNegotiations = (state = INITIAL_STATE, payload) => {
  return {
    type: payload.type,
    negotiationsBySale: state.negotiationsBySale,
    negotiationsByInterest: payload.payload,
    loadingData: false,
  };
};

const resetLoadingDataNegotiation = (state = INITIAL_STATE) => {
  return { ...state, loadingData: false };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
  [SUCCEEDED_BUYER_NEGOTIATION]: succeededBuyerNegotiation,
  [SUCCEEDED_SELLER_NEGOTIATION]: succeededSellerNegotiation,
  [FAILED_NEGOTIATION]: failedNegotiation,
  [UPDATE_SALE_NEGOTIATIONS]: updateSaleNegotiations,
  [UPDATE_INTEREST_NEGOTIATIONS]: updateInterestNegotiations,
  [RESET_LOADING_DATA_NEGOTIATION]: resetLoadingDataNegotiation,
});
