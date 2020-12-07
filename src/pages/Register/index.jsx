import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Grid, Box, TextField, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Title, Container, BackGround, StyledLink } from './styles';

import Header from '../Home/Header';
import LoadButton from '../../components/Button/LoadButton';
import { ADD_USER, LOADING_USER } from '../../constants/ActionTypes';
import { confirmPassword, email, required } from '../../utils/registerUtils';

export default function Register() {
    const defaultValues = {
        type: 'FISICAL',
    };

    const { register, handleSubmit, control, errors, watch } = useForm({
        defaultValues,
    });
    const { loading, success } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        dispatch({
            type: LOADING_USER,
        });
        dispatch({
            type: ADD_USER,
            data,
        });
    };

    return (
        <BackGround>
            <Header />
            <Grid container justify="center" alignItems="center">
                <Grid item md={12}>
                    <Container>
                        <Grid container>
                            <Grid item md={12}>
                                <Box pl={1} pb={2}>
                                    <Title>Novo Usuário</Title>
                                </Box>
                            </Grid>
                        </Grid>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Box p={1}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Nome e Sobrenome"
                                            name="name"
                                            inputRef={register(required())}
                                            helperText={errors?.name?.message}
                                            error={errors.name}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box p={1}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="E-Mail"
                                            name="username"
                                            inputRef={register(email())}
                                            helperText={
                                                errors?.username?.message
                                            }
                                            error={errors.username}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box p={1}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="CPF ou CNPJ"
                                            name="cpfCnpj"
                                            inputRef={register(required())}
                                            helperText={
                                                errors?.cpfCnpj?.message
                                            }
                                            error={errors.cpfCnpj}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box p={1}>
                                        <Controller
                                            name="type"
                                            control={control}
                                            as={
                                                <Select
                                                    fullWidth
                                                    variant="outlined"
                                                    placeholder="Selecione o tipo"
                                                >
                                                    <MenuItem value="FISICAL">
                                                        Físico
                                                    </MenuItem>
                                                </Select>
                                            }
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box p={1}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Senha"
                                            type="password"
                                            name="password"
                                            inputRef={register(required())}
                                            helperText={
                                                errors?.password?.message
                                            }
                                            error={errors.password}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box p={1}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Digite novamente a senha"
                                            type="password"
                                            name="confirmPassword"
                                            inputRef={register(
                                                confirmPassword(
                                                    watch('password')
                                                )
                                            )}
                                            helperText={
                                                errors?.confirmPassword &&
                                                'Informe a mesma senha'
                                            }
                                            error={errors.confirmPassword}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box
                                        p={1}
                                        style={{
                                            marginLeft: '-8px',
                                            marginTop: '-10px',
                                        }}
                                    >
                                        <LoadButton
                                            label="Cadastrar"
                                            type="submit"
                                            success={success}
                                            loading={loading}
                                            width="400px"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box p={1}>
                                        <StyledLink to="/login">
                                            Já possuí cadastro? Fazer login
                                        </StyledLink>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </Container>
                </Grid>
            </Grid>
        </BackGround>
    );
}
