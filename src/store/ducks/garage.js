import { createActions, createReducer } from 'reduxsauce';
import { generateId } from '../../utils/numbersUtils';
import { CREATE_GARAGE, REMOVE_GARAGE } from '../../constants/ActionTypes';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
  createGarage: [],
  removeGarage: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
  garages: [],
  garage: {},
};

/*
    Criando os reducer handlers
*/
const createGarage = (state = INITIAL_STATE) => {
  const newGarage = {
    newId: generateId(),
    box: null,
    registration: null,
  };
  return {
    garages: [...state.garages, newGarage],
  };
};

const removeGarage = (state = INITIAL_STATE, action) => {
  return {
    garages: state.garages.filter((garage) => garage.newId !== action.garageId),
  };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
  [CREATE_GARAGE]: createGarage,
  [REMOVE_GARAGE]: removeGarage,
});
