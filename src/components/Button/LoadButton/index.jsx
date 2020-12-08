import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import { Skeleton } from '@material-ui/lab';
import { SKYBLUE } from '../../../constants/Colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: 475,
    justifyContent: 'space-between',
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

export default function CircularIntegration({
    label,
    success,
    loading,
    loadingData,
    width = '250px',
}) {
    const classes = useStyles();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                {loadingData ? (
                    <Skeleton height={60} animation="wave">
                        <Button fullWidth />
                    </Skeleton>
                ) : (
                    <Button
                        style={{ width, height: '38px' }}
                        variant="contained"
                        color="primary"
                        className={buttonClassname}
                        disabled={loading}
                        size="medium"
                        type="submit"
                    >
                        {label}
                    </Button>
                )}
                {loading && (
                    <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                    />
                )}
            </div>
        </div>
    );
}
