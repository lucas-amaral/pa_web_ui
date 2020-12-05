import { createActions, createReducer } from 'reduxsauce';
import {
    ADD_PROPERTY_GARAGE,
    LOADING_PROPERTY,
    REMOVE_PROPERTY_GARAGE,
    RESET_SUCCESS_PROPERTY,
    SUCCEEDED_ADD_PROPERTY_IMAGE,
    SUCCEEDED_PROPERTY,
    SUCCEEDED_REMOVE_PROPERTY_IMAGE,
    UPDATE_PROPERTY_IMAGES,
    UPDATE_PROPERTY,
    RESET_LOADING_DATA_PROPERTY,
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
    images: [],
    loadingData: true,
    loading: false,
    success: false,
};

/*
    Criando os reducer handlers
*/
const succeededProperty = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        type: action.type,
        property: action.payload,
        loading: false,
        success: true,
    };
};

const updateProperty = (state = INITIAL_STATE, payload) => {
    return {
        ...state,
        type: payload.type,
        property: payload.payload,
    };
};

const updatePropertyImages = (state = INITIAL_STATE, payload) => {
    return {
        ...state,
        type: payload.type,
        images: payload.payload,
        loadingData: false,
    };
};

const succeededAddPropertyImage = (state = INITIAL_STATE, payload) => {
    payload.payload.map((addImg) => state.images.push(addImg));

    return {
        ...state,
        type: payload.type,
    };
};

const succeededRemovePropertyImage = (state = INITIAL_STATE, payload) => {
    return {
        ...state,
        type: payload.type,
        images: state.images.filter((image) => image.id !== payload.imageId),
    };
};

const loadingProperty = (state = INITIAL_STATE) => {
    return { ...state, loading: true, success: false };
};

const resetSuccessProperty = (state = INITIAL_STATE) => {
    return { ...state, loading: false, success: false };
};

const resetLoadingDataProperty = (state = INITIAL_STATE) => {
    return { ...state, loadingData: false };
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
    [SUCCEEDED_ADD_PROPERTY_IMAGE]: succeededAddPropertyImage,
    [SUCCEEDED_REMOVE_PROPERTY_IMAGE]: succeededRemovePropertyImage,
    [UPDATE_PROPERTY_IMAGES]: updatePropertyImages,
    [LOADING_PROPERTY]: loadingProperty,
    [RESET_LOADING_DATA_PROPERTY]: resetLoadingDataProperty,
    [RESET_SUCCESS_PROPERTY]: resetSuccessProperty,
    [ADD_PROPERTY_GARAGE]: addPropertyGarage,
    [REMOVE_PROPERTY_GARAGE]: removePropertyGarage,
});
