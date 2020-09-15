import { createActions, createReducer } from 'reduxsauce';

/*
    Criando action types e creators
*/
export const { Types, Creators } = createActions({
    addInterest: ['interest'],
    updateInterest: ['interest'],
    sendInterest: [],
    interestSucceeded: ['payload'],
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

const changeInterest = (state = INITIAL_STATE, action) => {
    return {
        interest: action.interest,
    };
};

const interestSucceeded = (state = INITIAL_STATE, action) => {
    return state;
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.ADD_INTEREST]: newInterest,
    [Types.UPDATE_INTEREST]: changeInterest,
    [Types.INTEREST_SUCCEEDED]: interestSucceeded,
});
