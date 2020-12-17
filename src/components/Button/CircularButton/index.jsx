import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import { Skeleton } from '@material-ui/lab';
import { SKYBLUE } from '../../../constants/Colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: SKYBLUE[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: SKYBLUE[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CircularButton({
  success,
  loading,
  loadingData,
  onClick,
}) {
  const classes = useStyles();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {loadingData ? (
          <Skeleton variant="circle" animation="wave">
            <Fab />
          </Skeleton>
        ) : (
          <Fab
            aria-label="save"
            color="primary"
            className={buttonClassname}
            disabled={loading}
            onClick={onClick}
          >
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
        )}
        {loading && (
          <CircularProgress size={68} className={classes.fabProgress} />
        )}
      </div>
    </div>
  );
}
