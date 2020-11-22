import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Box, Grid } from '@material-ui/core';

import { useForm } from 'react-hook-form';
import { Container } from './styles';
import { Title } from '../../../Register/styles';
import GridBox from '../../../../components/GridBox';
import { EDIT_USER, LOAD_STREET } from '../../../../constants/ActionTypes';

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
    const { register, handleSubmit, errors } = useForm();
    const classes = useStyles();
    const dispatch = useDispatch();
    const onSubmit = (data) =>
        dispatch({
            type: EDIT_USER,
            data: { ...data, type: getDbType(data.type) },
        });
    const user = useSelector((state) => state.user.user).payload;
    const street = useSelector((state) => state.street.street);

    function findStreet(event) {
        dispatch({
            type: LOAD_STREET,
            zipCode: event.target.value,
        });
    }

    function getType(type) {
        return type !== 'LEGAL' ? 'Pessoa Física' : 'Pessoa Jurídica';
    }

    function getDbType(type) {
        return type === 'Pessoa Física' ? 'FISICAL' : 'LEGAL';
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container>
                            <GridBox xs={9}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    defaultValue={user.name}
                                    inputRef={register()}
                                    label="Nome"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={2}>
                                <TextField
                                    fullWidth
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    placeholder="dd/MM/yyyy"
                                    format="dd/MM/yyyy"
                                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                                    defaultValue={user.dateOfBirth}
                                    inputRef={register()}
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
                                    id="username"
                                    name="username"
                                    type="email"
                                    value={user.username}
                                    inputRef={register()}
                                    label="Login"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={3}>
                                <TextField
                                    fullWidth
                                    id="cpfCnpj"
                                    name="cpfCnpj"
                                    defaultValue={user.cpfCnpj}
                                    inputRef={register()}
                                    label="Cpf"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={2}>
                                <TextField
                                    fullWidth
                                    id="type"
                                    name="type"
                                    value={getType(user.type)}
                                    inputRef={register()}
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
                            <TextField
                                inputRef={register()}
                                type="hidden"
                                id="address.id"
                                name="address.id"
                                defaultValue={
                                    user.address ? user.address.id : null
                                }
                            />
                            <GridBox xs={3}>
                                <TextField
                                    fullWidth
                                    id="address.streetId"
                                    name="address.streetId"
                                    defaultValue={
                                        user.address && user.address.street
                                            ? user.address.street.zipCode
                                            : null
                                    }
                                    inputRef={register()}
                                    onChange={findStreet}
                                    label="Cep"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={8}>
                                <TextField
                                    fullWidth
                                    id="street"
                                    defaultValue={
                                        user.address && user.address.street
                                            ? user.address.street.name
                                            : ' '
                                    }
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
                                    name="address.number"
                                    defaultValue={
                                        user.address
                                            ? user.address.number
                                            : null
                                    }
                                    inputRef={register()}
                                    label="Número"
                                    variant="outlined"
                                />
                            </GridBox>
                            <GridBox xs={5}>
                                <TextField
                                    fullWidth
                                    id="complement"
                                    name="address.complement"
                                    defaultValue={
                                        user.address
                                            ? user.address.complement
                                            : null
                                    }
                                    inputRef={register()}
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
                                        type="submit"
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
