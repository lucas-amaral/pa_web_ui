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
  addInterestBarter: [],
  removeInterestBarter: [],
  loadingInterest: [],
  resetSuccessInterest: [],
  setInitialState: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
  type: '',
  interests: [],
  interest: {},
  loading: false,
  success: false,
};

/*
    Criando os reducer handlers
*/
const newInterest = (state = INITIAL_STATE, action) => {
  return [...state.interests, action.interest];
};

const interestSucceeded = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    type: action.type,
    interest: {
      ...action.payload,
      uiTypes: getPropertyTypes(action.payload.types),
    },
    loading: false,
    success: true,
  };
};

const updateInterest = (state = INITIAL_STATE, payload) => {
  return {
    ...state,
    type: payload.type,
    interest: {
      ...payload.payload,
      uiTypes: getPropertyTypes(payload.payload.types),
    },
    xyz: 'teste',
  };
};

const addInterestBarter = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    type: action.type,
    interest: {
      ...state.interest,
      barters: [...state.interest.barters, action.newBarter],
    },
  };
};

const removeInterestBarter = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    type: action.type,
    interest: {
      ...state.interest,
      barters: state.interest.barters.filter(
        (barter) => barter.id !== action.barterId
      ),
    },
  };
};

const loadingInterest = (state = INITIAL_STATE) => {
  return { ...state, loading: true, success: false };
};

const resetSuccessInterest = (state = INITIAL_STATE) => {
  return { ...state, loading: false, success: false };
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
  [Types.LOADING_INTEREST]: loadingInterest,
  [Types.RESET_SUCCESS_INTEREST]: resetSuccessInterest,
  [Types.ADD_INTEREST_BARTER]: addInterestBarter,
  [Types.REMOVE_INTEREST_BARTER]: removeInterestBarter,
  [Types.SET_INITIAL_STATE]: setInitialState,
});
