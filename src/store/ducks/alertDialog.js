import { createActions, createReducer } from 'reduxsauce';
import { HANDLE_DIALOG } from '../../constants/ActionTypes';

export const { Types } = createActions({
  hanldeDialog: ['dataAction'],
});

const INITIAL_STATE = {
  open: false,
  action: () => {},
  message: '',
  sysarea: '',
};

const handleDialog = (state = INITIAL_STATE, dataAction) => {
  return {
    ...state,
    open: dataAction.data.open,
    action: dataAction.data.action,
    message: dataAction.data.message,
    sysarea: dataAction.data.sysarea,
  };
};

export default createReducer(INITIAL_STATE, {
  [HANDLE_DIALOG]: handleDialog,
});
