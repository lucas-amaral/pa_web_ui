import { createActions, createReducer } from 'reduxsauce';
import { getPropertyTypes } from '../../utils/interestUtils';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
    addInterest: ['interest'],
    updateInterest: ['payload'],
    sendInterest: [],
    interestSucceeded: ['payload'],
    loadInterest: ['username'],
    removeInterest: [],
    setInitialState: [],
});

// const CURRENT_STATE = {
//     interests: [],
//     interest: {},
// };

/*
    Estado inicial
*/
const INITIAL_STATE = {
    interests: [],
    interest: {},
};

/*
    Criando os reducer handlers
*/
const newInterest = (state = INITIAL_STATE, action) => {
    return {
        interests: [...state.interests, action.interest],
    };
};

const interestSucceeded = (state = INITIAL_STATE, action) => {
    return {
        type: action.type,
        interest: {
            ...action.payload,
            uiTypes: getPropertyTypes(action.payload.types),
        },
    };
};

const updateInterest = (state = INITIAL_STATE, payload) => {
    return {
        type: payload.type,
        interest: {
            ...payload.payload,
            uiTypes: getPropertyTypes(payload.payload.types),
        },
    };
};

const setInitialState = (state = INITIAL_STATE) => {
    return state;
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.ADD_INTEREST]: newInterest,
    [Types.INTEREST_SUCCEEDED]: interestSucceeded,
    [Types.UPDATE_INTEREST]: updateInterest,
    [Types.SET_INITIAL_STATE]: setInitialState,
});
