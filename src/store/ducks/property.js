import { createActions, createReducer } from 'reduxsauce';
import {
    ADD_PROPERTY_GARAGE,
    LOADING_PROPERTY,
    REMOVE_PROPERTY_GARAGE,
    RESET_SUCCESS_PROPERTY,
    SUCCEEDED_PROPERTY,
    UPDATE_PROPERTY,
} from '../../constants/ActionTypes';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    updateProperty: ['payload'],
    succeededProperty: ['payload'],
    loadingProperty: [],
    resetSuccessProperty: [],
    addPropertyGarage: [],
    removePropertyGarage: [],
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

const addPropertyGarage = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        type: action.type,
        property: {
            ...state.property,
            garages: state.property.garages
                ? [...state.property.garages, action.data]
                : [action.data],
        },
    };
};

const removePropertyGarage = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        type: action.type,
        property: {
            ...state.property,
            garages: state.property.garages.filter(
                (garage) =>
                    garage.id !== action.garageId ||
                    garage.newId !== action.newId
            ),
        },
    };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [SUCCEEDED_PROPERTY]: succeededProperty,
    [UPDATE_PROPERTY]: updateProperty,
    [LOADING_PROPERTY]: loadingProperty,
    [RESET_SUCCESS_PROPERTY]: resetSuccessProperty,
    [ADD_PROPERTY_GARAGE]: addPropertyGarage,
    [REMOVE_PROPERTY_GARAGE]: removePropertyGarage,
});