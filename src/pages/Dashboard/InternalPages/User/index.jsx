import React from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Box, Grid } from '@material-ui/core';

import { Container } from './styles';
import { Title } from '../../../Register/styles';
import GridBox from '../../../../components/GridBox';

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
    let user = useSelector((state) => state.user.user);

    if (user.payload) {
        user = user.payload;
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
                            <GridBox xs={11}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    defaultValue={user.name}
                                    label="Nome"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={3}>
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
                                    value={user.type}
                                    aria-readonly
                                    label="Tipo"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={2}>
                                <TextField
                                    fullWidth
                                    id="dateOfBirth"
                                    format="dd/MM/yyyy"
                                    defaultValue={user.dateOfBirth}
                                    type="date"
                                    label="Data de nascimento"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
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
                            <GridBox xs={11}>
                                <TextField
                                    fullWidth
                                    id="street"
                                    // defaultValue={user.adress}
                                    label="Rua"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={3}>
                                <TextField
                                    fullWidth
                                    id="cep"
                                    defaultValue={
                                        user.address
                                            ? user.address.street
                                            : null
                                    }
                                    label="Cep"
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
