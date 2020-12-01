import { createActions, createReducer } from 'reduxsauce';
import { generateId } from '../../utils/numbersUtils';
import { getPropertyTypes } from '../../utils/interestUtils';
import {
    CREATE_BARTER_INTEREST,
    REMOVE_BARTER_INTEREST,
    UPDATE_BARTER,
} from '../../constants/ActionTypes';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    succeededBarter: ['payload'],
    updateBarter: ['payload'],
    createBarterInterest: [],
    removeBarterInterest: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
    barters: [],
    barter: {},
};

/*
    Criando os reducer handlers
*/
// const succeededBarter = (state = INITIAL_STATE, action) => {
//     return {
//         type: action.type,
//         barter: {
//             ...action.payload,
//         },
//         loading: false,
//         success: true,
//     };
// };

const updateBarter = (state = INITIAL_STATE, payload) => {
    return {
        type: payload.type,
        barter: {
            ...payload.payload,
            uiTypes: getPropertyTypes(payload.payload.types),
        },
    };
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
    [UPDATE_BARTER]: updateBarter,
    [CREATE_BARTER_INTEREST]: createBarterInterest,
    [REMOVE_BARTER_INTEREST]: removeBarterInterest,
});
