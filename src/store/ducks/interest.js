import { createActions, createReducer } from 'reduxsauce';

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

const updateInterest = (state = INITIAL_STATE, payload) => {
    return {
        interest: payload,
    };
};

const interestSucceeded = (state = INITIAL_STATE, action) => {
    return state;
};

const setInitialState = (state = INITIAL_STATE) => {
    return state;
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.ADD_INTEREST]: newInterest,
    [Types.UPDATE_INTEREST]: updateInterest,
    [Types.INTEREST_SUCCEEDED]: interestSucceeded,
    [Types.SET_INITIAL_STATE]: setInitialState,
});
