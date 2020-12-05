import { createActions, createReducer } from 'reduxsauce';
import { generateId } from '../../utils/numbersUtils';
import {
    CREATE_BARTER_INTEREST,
    LOADING_BARTER,
    REMOVE_BARTER_INTEREST,
    RESET_SUCCESS_BARTER,
    SET_BARTER,
    SUCCEEDED_ADD_BARTER_IMAGE,
    SUCCEEDED_BARTER,
    SUCCEEDED_REMOVE_BARTER_IMAGE,
    UPDATE_BARTER,
    UPDATE_BARTER_IMAGES,
} from '../../constants/ActionTypes';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    succeededBarter: ['payload'],
    updateBarter: ['payload'],
    loadingInterest: [],
    resetSuccessInterest: [],
    setBarter: [],
    createBarterInterest: [],
    removeBarterInterest: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
    barters: [],
    barter: {},
    images: [],
    loadingData: true,
    loading: false,
    success: false,
};

/*
    Criando os reducer handlers
*/
const succeededBarter = (state = INITIAL_STATE, action) => {
    return {
        type: action.type,
        barter: action.payload,
        barters: state.barters.map((barter) =>
            barter.id === action.payload.id ? action.payload : barter
        ),
        loading: false,
        success: true,
    };
};

const updateBarter = (state = INITIAL_STATE, payload) => {
    return {
        ...state,
        type: payload.type,
        barter: payload.payload,
        barters: state.barters.map((barter) =>
            barter.id === payload.payload.id ? payload.payload : barter
        ),
    };
};

const updateBarterImages = (state = INITIAL_STATE, payload) => {
    return {
        ...state,
        type: payload.type,
        images: payload.payload,
        loadingData: false,
    };
};

const succeededAddBarterImage = (state = INITIAL_STATE, payload) => {
    payload.payload.map((addImg) => state.images.push(addImg));

    return {
        ...state,
        type: payload.type,
    };
};

const succeededRemoveBarterImage = (state = INITIAL_STATE, payload) => {
    return {
        ...state,
        type: payload.type,
        images: state.images.filter((image) => image.id !== payload.imageId),
    };
};

const setBarter = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        type: action.type,
        barter: action.barter,
    };
};

const loadingBarter = (state = INITIAL_STATE) => {
    return { ...state, loading: true, success: false };
};

const resetSuccessBarter = (state = INITIAL_STATE) => {
    return { ...state, loading: false, success: false };
};

const createBarterInterest = (state = INITIAL_STATE) => {
    const newBarter = {
        newId: generateId(),
        type: 'VEHICLE',
        value: 0.0,
    };
    return {
        barters: [...state.barters, newBarter],
    };
};

const removeBarterInterest = (state = INITIAL_STATE, action) => {
    return {
        barters: state.barters.filter(
            (barter) => barter.newId !== action.barterId
        ),
    };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [SUCCEEDED_BARTER]: succeededBarter,
    [UPDATE_BARTER]: updateBarter,
    [SUCCEEDED_ADD_BARTER_IMAGE]: succeededAddBarterImage,
    [SUCCEEDED_REMOVE_BARTER_IMAGE]: succeededRemoveBarterImage,
    [UPDATE_BARTER_IMAGES]: updateBarterImages,
    [SET_BARTER]: setBarter,
    [LOADING_BARTER]: loadingBarter,
    [RESET_SUCCESS_BARTER]: resetSuccessBarter,
    [CREATE_BARTER_INTEREST]: createBarterInterest,
    [REMOVE_BARTER_INTEREST]: removeBarterInterest,
});
