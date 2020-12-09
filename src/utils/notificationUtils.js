import { SET_NOTIFICATION } from '../constants/ActionTypes';

export const notification = (message) => {
  return {
    type: SET_NOTIFICATION,
    notification: { message },
  };
};

export const errorNotification = (message) => {
  return {
    type: SET_NOTIFICATION,
    notification: {
      message,
      variant: 'error',
    },
  };
};
