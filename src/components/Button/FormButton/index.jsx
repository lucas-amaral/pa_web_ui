import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(() => ({
    mainDiv: {
        alignItems: 'center',
        display: 'flex',
    },
    bottomBoxButtons: {
        display: 'flex',
        width: 475,
        justifyContent: 'space-between',
    },
    bottomButton: {
        margin: 5,
        width: '230px',
        height: '38px',
    },
}));

export default function FormButton({ label, onClick, loading, loadingData }) {
    const classes = useStyles();

    return (
        <div className={classes.mainDiv}>
            <div>
                {loadingData ? (
                    <Skeleton height={60} animation="wave">
                        <Button fullWidth />
                    </Skeleton>
                ) : (
                    <Button
                        className={classes.bottomButton}
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        onClick={onClick}
                        fullWidth
                    >
                        {label}
                    </Button>
                )}
            </div>
        </div>
    );
}
