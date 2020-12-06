/*
    Criando action types e creators
*/
import { createActions, createReducer } from 'reduxsauce';
import {
    SET_CONTENT_BODY,
    SET_NOTIFICATION,
} from '../../constants/ActionTypes';

export const { Types } = createActions({
    setContentBody: [],
    notification: [],
});

/*
    Estado inicial
*/
const INITIAL_STATE = {
    contentBody: '',
    notification: null,
};

/*
    Criando os reducer handlers
*/
const setContentBody = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        type: action.type,
        contentBody: action.contentBody,
    };
};

const setNotification = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        type: action.type,
        notification: action.notification,
    };
};

/*
    Criando o reducer
*/
export default createReducer(INITIAL_STATE, {
    [SET_CONTENT_BODY]: setContentBody,
    [SET_NOTIFICATION]: setNotification,
});
