import { createActions, createReducer } from 'reduxsauce';
import { generateId } from '../../utils/numbersUtils';

/*
    Criando action types e creators
*/
export const { Types } = createActions({
  addBarter: [],
  removeBarter: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
  barters: [],
};

/*
    Criando os reducer handlers
*/
const addBarter = (state = INITIAL_STATE) => {
  const newBarter = {
    newId: generateId(),
    type: 'VEHICLE',
    value: 0.0,
  };
  return {
    barters: [...state.barters, newBarter],
  };
};

const removeBarter = (state = INITIAL_STATE, action) => {
  return {
    barters: state.barters.filter((barter) => barter.newId !== action.barterId),
  };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
  [Types.ADD_BARTER]: addBarter,
  [Types.REMOVE_BARTER]: removeBarter,
});
