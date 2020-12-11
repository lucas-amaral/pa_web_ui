import { createActions, createReducer } from 'reduxsauce';
import { HANDLE_DIALOG } from '../../constants/ActionTypes';

export const { Types } = createActions({
  hanldeDialog: ['dataAction'],
});

const INITIAL_STATE = {
  open: false,
};

const handleDialog = (state = INITIAL_STATE, dataAction) => {
  return {
    ...state,
    open: dataAction.data.status,
  };
};

export default createReducer(INITIAL_STATE, {
  [HANDLE_DIALOG]: handleDialog,
});
