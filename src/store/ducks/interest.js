import { createActions, createReducer } from 'reduxsauce';
import { getPropertyTypes } from '../../utils/interestUtils';
import {
  FAILED_INTEREST,
  LOADING_INTEREST,
  RESET_SUCCESS_INTEREST,
  SUCCEEDED_INTEREST,
  UPDATE_INTEREST,
  RESET_LOADING_DATA_INTEREST,
  RESET_LOADING_INTEREST,
  REMOVE_INTEREST_BARTER,
  ADD_INTEREST_BARTER,
  RESET_INTEREST,
  EDIT_INTEREST_BARTER,
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

const succeededInterest = (state = INITIAL_STATE, payload) => {
  return {
    ...state,
    type: payload.type,
    interest: {
      ...payload.payload,
      uiTypes: getPropertyTypes(payload.payload.types),
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
    ...state,
    type: payload.type,
    interest: {
      ...payload.payload,
      uiTypes: getPropertyTypes(payload.payload.types),
    },
    loadingData: false,
  };
};

const resetInterest = (state = INITIAL_STATE, payload) => {
  return {
    ...state,
    type: payload.type,
    interest: {
      user: {},
      barters: [],
    },
    loadingData: false,
  };
};

const addInterestBarter = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    type: action.type,
    interest: {
      ...state.interest,
      barters: [...state.interest.barters, action.data],
    },
  };
};

const editInterestBarter = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    type: action.type,
    interest: {
      ...state.interest,
      barters: state.interest.barters.map(
        (barter) => (barter.id = action.id ? action : barter)
      ),
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
        (barter) =>
          barter.id !== action.barterId || barter.newId !== action.newId
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

const resetLoadingInterest = (state = INITIAL_STATE) => {
  return { ...state, loading: false };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
  [SUCCEEDED_INTEREST]: succeededInterest,
  [FAILED_INTEREST]: failedInterest,
  [UPDATE_INTEREST]: updateInterest,
  [RESET_INTEREST]: resetInterest,
  [LOADING_INTEREST]: loadingInterest,
  [RESET_SUCCESS_INTEREST]: resetSuccessInterest,
  [RESET_LOADING_DATA_INTEREST]: resetLoadingDataInterest,
  [ADD_INTEREST_BARTER]: addInterestBarter,
  [EDIT_INTEREST_BARTER]: editInterestBarter,
  [REMOVE_INTEREST_BARTER]: removeInterestBarter,
  [RESET_LOADING_INTEREST]: resetLoadingInterest,
});
