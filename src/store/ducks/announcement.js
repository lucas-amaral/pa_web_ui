import { createActions, createReducer } from 'reduxsauce';

/*
    Criando action types e creators
*/
export const { Types, Creators } = createActions({
  addAnnouncement: ['announcement'],
  updateAnnouncement: ['announcement'],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
  announcements: [],
  announcement: {},
};

/*
    Criando os reducer handlers
*/
const newAnnoucement = (state = INITIAL_STATE, action) => {
  return {
    announcements: [...state.announcements, action.announcement],
  };
};

const changeAnnoucement = (state = INITIAL_STATE, action) => {
  return {
    announcement: action.announcement,
  };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
  [Types.ADD_ANNOUNCEMENT]: newAnnoucement,
  [Types.UPDATE_ANNOUNCEMENT]: changeAnnoucement,
});
