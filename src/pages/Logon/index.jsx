import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Grid, Box, TextField } from '@material-ui/core';
// import { login } from '../../commons/http/login';

import {
    Title,
    Container,
    BackGround,
    StyledButton,
    StyledLink,
    StyledTextField,
} from './styles';

import Header from '../Home/Header';

export default function Home() {
    const history = useHistory();
    const [loginInvalid, setLoginInvalid] = useState(false);
    const { register, errors, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        axios
            .post(
                `https://crm-service.herokuapp.com/login`,
                {},
                {
                    auth: { username: data.username, password: data.password },
                }
            )
            .then((response) => {
                const token = response.headers['x-auth-token'];
                localStorage.setItem('token', token);
                history.push('/dashboard');
            })
            .catch((err) => {
                setLoginInvalid(err);
            });
    };

    return (
        <BackGround>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Header />
                <Container>
                    <Grid container>
                        <Grid item md={12}>
                            <Box pl={1} pb={2}>
                                <Title>Logon</Title>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                            <Box p={1}>
                                <StyledTextField
                                    variant="outlined"
                                    label="E-Mail"
                                    name="username"
                                    inputRef={register()}
                                    required
                                />
                            </Box>
                        </Grid>
                        <Grid item md={12}>
                            <Box p={1}>
                                <StyledTextField
                                    variant="outlined"
                                    label="Senha"
                                    name="password"
                                    inputRef={register()}
                                    required
                                />
                            </Box>
                        </Grid>
                        <Grid item={12}>
                            <Box p={1}>
                                <StyledButton
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Logar
                                </StyledButton>
                            </Box>
                        </Grid>

                        <Grid item={12}>
                            <Box p={1}>
                                <StyledLink to="/register">
                                    Ainda não possuí cadastro? Clique aqui e
                                    faça já o seu
                                </StyledLink>
                            </Box>
                            {loginInvalid && (
                                <Box p={1}>
                                    <StyledLink to="/register" color="red">
                                        Login inválido, tente novamente
                                    </StyledLink>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </form>
        </BackGround>
    );
}
