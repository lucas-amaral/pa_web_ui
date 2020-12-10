import { createReducer } from 'reduxsauce';
import {
  ADD_IMAGE,
  REMOVE_IMAGE,
  RESET_IMAGES,
} from '../../constants/ActionTypes';

/*
    Estado inicial
*/
const INITIAL_STATE = {
  images: [],
};

/*
    Criando os reducer handlers
*/
const addImage = (state = INITIAL_STATE, action) => {
  return { images: [...state.images, action.image] };
};

const removeImage = (state = INITIAL_STATE, action) => {
  return {
    images: state.images.filter((image) => image.name !== action.filename),
  };
};

const resetImages = (state = INITIAL_STATE) => {
  return INITIAL_STATE;
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
  [ADD_IMAGE]: addImage,
  [REMOVE_IMAGE]: removeImage,
  [RESET_IMAGES]: resetImages,
});
