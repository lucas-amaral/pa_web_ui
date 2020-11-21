import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Box, Grid } from '@material-ui/core';

import { Container } from './styles';
import { Title } from '../../../Register/styles';
import GridBox from '../../../../components/GridBox';
import { LOAD_STREET } from '../../../../constants/ActionTypes';

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

function User() {
    const classes = useStyles();
    const dispatch = useDispatch();
    let user = useSelector((state) => state.user.user);
    let street = useSelector((state) => state.street.street);

    if (user.payload) {
        user = user.payload;
        if (user.street) {
            street = user.street;
        }
    }
    if (street.payload) {
        street = street.payload;
    }

    function findStreet(event) {
        dispatch({
            type: LOAD_STREET,
            zipCode: event.target.value
        });
    }

    function getType(type) {
        return type !== 'FISICAL' ? 'Pessoa Jurídica' : 'Pessoa Física';
    }

    return (
        <Grid container>
            <Grid item md={12}>
                <Container>
                    <Grid container>
                        <Grid item md={12}>
                            <Box pl={1} pb={2}>
                                <Title>Usuário</Title>
                            </Box>
                        </Grid>
                    </Grid>
                    <form>
                        <Grid container>
                            <GridBox xs={9}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    defaultValue={user.name}
                                    label="Nome"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={2}>
                                <TextField
                                    fullWidth
                                    id="dateOfBirth"
                                    placeholder="dd/MM/yyyy"
                                    defaultValue={user.dateOfBirth}
                                    type="date"
                                    label="Data de nascimento"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </GridBox>
                            <GridBox xs={4}>
                                <TextField
                                    fullWidth
                                    id="login"
                                    defaultValue={user.username}
                                    label="Login"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={3}>
                                <TextField
                                    fullWidth
                                    id="cpf"
                                    defaultValue={user.cpfCnpj}
                                    label="Cpf"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={2}>
                                <TextField
                                    fullWidth
                                    id="type"
                                    value={getType(user.type)}
                                    aria-readonly
                                    label="Tipo"
                                    variant="outlined"
                                />
                            </GridBox>
                            <Grid container style={{ marginTop: '20px' }}>
                                <Grid item md={12}>
                                    <Box pl={1} pb={2}>
                                        <Title style={{ fontSize: '15px' }}>
                                            Endereço
                                        </Title>
                                    </Box>
                                </Grid>
                            </Grid>
                            <GridBox xs={3}>
                                <TextField
                                    fullWidth
                                    id="zipCode"
                                    defaultValue={
                                        user.address
                                            ? user.address.street
                                            : null
                                    }
                                    onChange={findStreet}
                                    label="Cep"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={8}>
                                <TextField
                                    fullWidth
                                    id="street"
                                    defaultValue={' '}
                                    value={street.name}
                                    label="Rua"
                                    aria-readonly
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={3}>
                                <TextField
                                    fullWidth
                                    id="number"
                                    defaultValue={
                                        user.address
                                            ? user.address.number
                                            : null
                                    }
                                    label="Número"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={5}>
                                <TextField
                                    fullWidth
                                    id="complement"
                                    defaultValue={
                                        user.address
                                            ? user.address.complement
                                            : null
                                    }
                                    label="Complemento"
                                    variant="outlined"
                                />
                            </GridBox>
                            <CardActions style={{ marginTop: '10px' }}>
                                <div className={classes.bottomBoxButtons}>
                                    <Button
                                        className={classes.bottomButton}
                                        variant="contained"
                                        size="medium"
                                        color="primary"
                                        fullWidth
                                    >
                                        Salvar
                                    </Button>
                                </div>
                            </CardActions>
                        </Grid>
                    </form>
                </Container>
            </Grid>
        </Grid>
    );
}

export default User;
