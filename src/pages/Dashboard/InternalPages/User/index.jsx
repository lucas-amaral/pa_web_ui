import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import { Box, Grid } from '@material-ui/core';

import { useForm } from 'react-hook-form';
import { Container } from './styles';
import { Title } from '../../../Register/styles';
import Address from '../Address';
import GridBox from '../../../../components/GridBox';
import {
    EDIT_USER,
    LOADING_USER,
    RESET_SUCCESS_USER,
} from '../../../../constants/ActionTypes';
import LoadButton from '../../../../components/Button/LoadButton';
import { getDbType, getType } from '../../../../utils/userUtils';

function User() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { user, loading, success } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch({
            type: RESET_SUCCESS_USER,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (data) => {
        dispatch({
            type: LOADING_USER,
        });
        dispatch({
            type: EDIT_USER,
            data: { ...data, type: getDbType(data.type) },
        });
    };

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
                            <Address
                                address={user.address}
                                register={register()}
                            />
                            <CardActions style={{ marginTop: '10px' }}>
                                <LoadButton
                                    label="Salvar"
                                    success={success}
                                    loading={loading}
                                />
                            </CardActions>
                        </Grid>
                    </form>
                </Container>
            </Grid>
        </Grid>
    );
}

export default User;
