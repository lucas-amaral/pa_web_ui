import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import {
    Creators as InterestActions,
    Types as InterestTypes,
} from '../../../../store/ducks/interest';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    card: {
        width: 475,
    },
    title: {
        fontSize: 14,
        paddingLeft: 10,
    },
    bottomBoxButtons: {
        display: 'flex',
        width: 475,
        justifyContent: 'space-between',
    },
    bottomButton: {
        margin: 5,
    },
}));

function MyInterest() {
    const classes = useStyles();
    const dataInterest = { username: localStorage.getItem('username') };
    const dispatch = useDispatch();
    let interest = useSelector((state) => state.interest.interest);

    useEffect(() => {
        dispatch({
            type: InterestTypes.LOAD_INTEREST,
            dataInterest,
        });
    }, []);

    const removeInterest = (interestID) => {
        dispatch({
            type: InterestTypes.REMOVE_INTEREST,
            interestID,
        });
    };

    console.log('interest', interest);
    if (interest.payload) {
        interest = interest.payload;
    }

    return (
        <div>
            {/* {interest.value && <div>VALOR {interest.value} </div>} */}
            {interest.value && (
                <Card className={classes.card} variant="outlined">
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Valor maximo: {interest.value},
                    </Typography>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Tipos buscados:{' '}
                        {interest.types.map((tipo) => {
                            return <span> {tipo},</span>;
                        })}
                    </Typography>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Bairos de interesse:{' '}
                        {interest.neighborhoods.map((bairro) => {
                            return <span> {bairro.name},</span>;
                        })}
                    </Typography>
                    <CardActions>
                        <div className={classes.bottomBoxButtons}>
                            <Button
                                className={classes.bottomButton}
                                variant="contained"
                                size="medium"
                                color="primary"
                                fullWidth
                            >
                                Editar
                            </Button>
                            <Button
                                className={classes.bottomButton}
                                variant="contained"
                                size="medium"
                                color="primary"
                                onClick={() => removeInterest(interest.id)}
                                fullWidth
                            >
                                Excluir
                            </Button>
                        </div>
                    </CardActions>
                </Card>
            )}
        </div>
    );
}

export default MyInterest;
