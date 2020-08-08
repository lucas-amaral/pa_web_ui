import { createActions, createReducer } from 'reduxsauce';

/*
    Criando action types e creators
*/
export const { Types, Creators } = createActions({
    addAnnouncement: ['announcement'],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
    announcements: [],
};

/*
    Criando os reducer handlers
*/
const newAnnoucement = (state = INITIAL_STATE, action) => {
    return {
        announcements: [...state, action.announcement],
    };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [Types.ADD_ANNOUNCEMENT]: newAnnoucement,
});
