import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
        width: '100%',
    },
    fields: {
        margin: 10,
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
                    <TextField
                        id="title"
                        value={interest.value}
                        label="Valor maximo:"
                        variant="outlined"
                        className={classes.fields}
                    />
                    <TextField
                        id="types"
                        value={interest.types.map((tipo) => tipo)}
                        label="Tipos buscados"
                        variant="outlined"
                        className={classes.fields}
                    />
                    <TextField
                        id="neighborhoods"
                        value={interest.neighborhoods.map(
                            (bairro) => bairro.name
                        )}
                        label="Bairos de interesse"
                        variant="outlined"
                        className={classes.fields}
                    />
                    <TextField
                        id="dorms"
                        value={interest.dorms}
                        label="Número de dormitórios"
                        variant="outlined"
                        className={classes.fields}
                    />
                    <TextField
                        id="bathrooms"
                        value={interest.bathrooms}
                        label="Número de banheiros"
                        variant="outlined"
                        className={classes.fields}
                    />
                    <TextField
                        id="garages"
                        value={interest.garages}
                        label="Número de garagens"
                        variant="outlined"
                        className={classes.fields}
                    />
                    <FormControlLabel
                        control={<Checkbox id="pool" checked={interest.pool} />}
                        className={classes.fields}
                        label="Com piscina"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox id="balcony" checked={interest.balcony} />
                        }
                        className={classes.fields}
                        label="Com sacada"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="elevator"
                                checked={interest.elevator}
                            />
                        }
                        className={classes.elevator}
                        label="Com elevador"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="barbecueGrill"
                                checked={interest.barbecueGrill}
                            />
                        }
                        className={classes.barbecueGrill}
                        label="Com churrasqueira"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="financing"
                                checked={interest.financing}
                            />
                        }
                        className={classes.fields}
                        label="Financiável"
                    />

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
