import { createActions, createReducer } from 'reduxsauce';
import {
    LOADING_SALE,
    RESET_SUCCESS_SALE,
    SUCCEEDED_SALE,
    UPDATE_SALE,
    UPDATE_SALES,
} from '../../constants/ActionTypes';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    updateSale: ['payload'],
    succeededSale: ['payload'],
    loadingSale: [],
    resetSuccessSale: [],
    addSaleGarage: [],
    removeSaleGarage: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
    sales: [],
    sale: {},
    loading: false,
    success: false,
};

/*
    Criando os reducer handlers
*/
const succeededSale = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        type: action.type,
        sale: action.payload,
        loading: false,
        success: true,
    };
};

const updateSales = (state = INITIAL_STATE, payload) => {
    return {
        ...state,
        type: payload.type,
        sales: payload.payload,
    };
};

const updateSale = (state = INITIAL_STATE, payload) => {
    return {
        ...state,
        type: payload.type,
        sale: payload.payload,
    };
};

const loadingSale = (state = INITIAL_STATE) => {
    return { ...state, loading: true, success: false };
};

const resetSuccessSale = (state = INITIAL_STATE) => {
    return { ...state, loading: false, success: false };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [SUCCEEDED_SALE]: succeededSale,
    [UPDATE_SALES]: updateSales,
    [UPDATE_SALE]: updateSale,
    [LOADING_SALE]: loadingSale,
    [RESET_SUCCESS_SALE]: resetSuccessSale,
});
