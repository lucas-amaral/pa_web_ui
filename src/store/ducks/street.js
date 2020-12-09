import { createActions, createReducer } from 'reduxsauce';
import { UPDATE_STREET } from '../../constants/ActionTypes';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
  updateStreet: ['payload'],
});

const INITIAL_STATE = {
  street: {},
};

const updateStreet = (state = INITIAL_STATE, action) => {
  return {
    type: action.type,
    street: action.payload,
  };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
  [UPDATE_STREET]: updateStreet,
});
