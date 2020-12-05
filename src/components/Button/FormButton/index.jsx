import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

export default function FormButton({ label, onClick, loading }) {
    const classes = useStyles();

    return (
        <div className={classes.mainDiv}>
            <div>
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
            </div>
        </div>
    );
}
