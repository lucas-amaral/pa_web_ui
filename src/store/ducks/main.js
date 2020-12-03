/*
    Criando action types e creators
*/
import { createActions, createReducer } from 'reduxsauce';
import { SET_CONTENT_BODY } from '../../constants/ActionTypes';

export const { Types } = createActions({
    setContentBody: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
    contentBody: '',
};

/*
    Criando os reducer handlers
*/
const setContentBody = (state = INITIAL_STATE, action) => {
    return {
        type: action.type,
        contentBody: action.contentBody,
    };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [SET_CONTENT_BODY]: setContentBody,
});
