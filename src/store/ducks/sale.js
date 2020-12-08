import { createActions, createReducer } from 'reduxsauce';
import {
    FAILED_SALE,
    LOADING_SALE,
    RESET_SUCCESS_SALE,
    RESET_LOADING_DATA_SALE,
    SUCCEEDED_SALE,
    UPDATE_BARTER_PROPERTY_SALE,
    UPDATE_BARTER_VEHICLE_SALE,
    UPDATE_FINANCING_SALE,
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
    loadingData: true,
    loading: false,
    success: false,
    showFinancing: false,
    showBarterProperty: false,
    showBarterVehicle: false,
};

/*
    Criando os reducer handlers
*/
const succeededSale = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        type: action.type,
        sale: action.payload,
        loadingData: false,
        loading: false,
        success: true,
    };
};

const failedSale = (state = INITIAL_STATE) => {
    return { ...state, loading: false, success: false };
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
        loadingData: false,
        showFinancing: payload.payload.financing,
        showBarterProperty: payload.payload.barterProperty,
        showBarterVehicle: payload.payload.barterVehicle,
    };
};

const loadingSale = (state = INITIAL_STATE) => {
    return { ...state, loading: true, success: false };
};

const resetSuccessSale = (state = INITIAL_STATE) => {
    return { ...state, loading: false, success: false };
};

const resetLoadingDataSale = (state = INITIAL_STATE) => {
    return { ...state, loadingData: false };
};

const updateFinancingSale = (state = INITIAL_STATE) => {
    return { ...state, showFinancing: !state.showFinancing };
};

const updateBarterPropertySale = (state = INITIAL_STATE) => {
    return { ...state, showBarterProperty: !state.showBarterProperty };
};

const updateBarterVehicleSale = (state = INITIAL_STATE) => {
    return { ...state, showBarterVehicle: !state.showBarterVehicle };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [SUCCEEDED_SALE]: succeededSale,
    [FAILED_SALE]: failedSale,
    [UPDATE_SALES]: updateSales,
    [UPDATE_SALE]: updateSale,
    [LOADING_SALE]: loadingSale,
    [RESET_SUCCESS_SALE]: resetSuccessSale,
    [RESET_LOADING_DATA_SALE]: resetLoadingDataSale,
    [UPDATE_FINANCING_SALE]: updateFinancingSale,
    [UPDATE_BARTER_PROPERTY_SALE]: updateBarterPropertySale,
    [UPDATE_BARTER_VEHICLE_SALE]: updateBarterVehicleSale,
});
