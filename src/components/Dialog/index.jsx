import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  HANDLE_DIALOG,
  RESET_LOADING_INTEREST,
  RESET_LOADING_SALE,
} from '../../constants/ActionTypes';

export default function AlertDialog() {
  const dispatch = useDispatch();

  const { open, action, message, sysarea } = useSelector(
    (state) => state.alertDialog
  );

  const handleClose = (agree) => {
    if (agree) {
      action();
    }
    dispatch({
      type: HANDLE_DIALOG,
      data: {
        open: false,
      },
    });
    if (sysarea === 'INTEREST') {
      dispatch({
        type: RESET_LOADING_INTEREST,
      });
    } else {
      dispatch({
        type: RESET_LOADING_SALE,
      });
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Importante!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={() => handleClose(true)} color="primary" autoFocus>
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
