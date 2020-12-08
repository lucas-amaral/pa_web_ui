import { createActions, createReducer } from 'reduxsauce';
import { getPropertyTypes } from '../../utils/interestUtils';
import {
  ADD_FORM_INTEREST_BARTER,
  ADD_INTEREST,
  FAILED_INTEREST,
  LOADING_INTEREST,
  REMOVE_FORM_INTEREST_BARTER,
  RESET_SUCCESS_INTEREST,
  SUCCEEDED_INTEREST,
  UPDATE_INTEREST,
  RESET_LOADING_DATA_INTEREST,
} from '../../constants/ActionTypes';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
  addInterest: ['interest'],
  succeededInterest: ['payload'],
  updateInterest: ['payload'],
  addFormInterestBarter: [],
  removeFormInterestBarter: [],
  loadingInterest: [],
  resetSuccessInterest: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
  interest: {
    user: {},
    barters: [],
  },
  loadingData: true,
  loading: false,
  success: false,
};

/*
    Criando os reducer handlers
*/
const addInterest = (state = INITIAL_STATE, action) => {
  return {
    interests: [...state.interests, action.interest],
  };
};

const succeededInterest = (state = INITIAL_STATE, action) => {
  return {
    type: action.type,
    interest: {
      ...action.payload,
      uiTypes: getPropertyTypes(action.payload.types),
    },
    loading: false,
    success: true,
  };
};

const failedInterest = (state = INITIAL_STATE) => {
  return { ...state, loading: false, success: false };
};

const updateInterest = (state = INITIAL_STATE, payload) => {
  return {
    type: payload.type,
    interest: {
      ...payload.payload,
      uiTypes: getPropertyTypes(payload.payload.types),
    },
    loadingData: false,
  };
};

const addFormInterestBarter = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    type: action.type,
    interest: {
      ...state.interest,
      barters: [...state.interest.barters, action.payload],
    },
  };
};

const removeFormInterestBarter = (state = INITIAL_STATE, action) => {
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

const resetLoadingDataInterest = (state = INITIAL_STATE) => {
  return { ...state, loadingData: false };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
  [ADD_INTEREST]: addInterest,
  [SUCCEEDED_INTEREST]: succeededInterest,
  [FAILED_INTEREST]: failedInterest,
  [UPDATE_INTEREST]: updateInterest,
  [LOADING_INTEREST]: loadingInterest,
  [RESET_SUCCESS_INTEREST]: resetSuccessInterest,
  [RESET_LOADING_DATA_INTEREST]: resetLoadingDataInterest,
  [ADD_FORM_INTEREST_BARTER]: addFormInterestBarter,
  [REMOVE_FORM_INTEREST_BARTER]: removeFormInterestBarter,
});
