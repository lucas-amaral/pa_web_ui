import React from 'react';
import { useForm } from 'react-hook-form';

import { Grid, Box } from '@material-ui/core';

import { useSelector } from 'react-redux';
import {
    Title,
    Container,
    BackGround,
    StyledLink,
    StyledTextField,
} from './styles';

import Header from '../../Home/Header';
import LoadButton from '../../../components/Button/LoadButton';

function LoginComponent({ onSubmit }) {
    const { register, handleSubmit, errors } = useForm();
    const loading = useSelector((state) => state.login.loading);

    return (
        <BackGround>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* {error && <Message content={error?.detail} negative />} */}
                <Header />
                <Grid container justify="center" alignItems="center">
                    <Grid item md={12}>
                        <Container>
                            <Grid container>
                                <Grid item>
                                    <Grid container>
                                        <Grid item md={12}>
                                            <Box pl={1} pb={2}>
                                                <Title>Login</Title>
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
                                                    type="email"
                                                    inputRef={register({
                                                        required:
                                                            'Digite o seu e-mail',
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                            message:
                                                                'Digite um e-mail válido',
                                                        },
                                                    })}
                                                    required
                                                />
                                                {errors.email && (
                                                    <p className="error">
                                                        {errors.email.message}
                                                    </p>
                                                )}
                                            </Box>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Box p={1}>
                                                <StyledTextField
                                                    variant="outlined"
                                                    label="Senha"
                                                    name="password"
                                                    inputRef={register()}
                                                    type="password"
                                                    required
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid>
                                            <Box
                                                p={1}
                                                style={{
                                                    marginLeft: '-8px',
                                                    marginTop: '-10px',
                                                }}
                                            >
                                                <LoadButton
                                                    label="Logar"
                                                    type="submit"
                                                    success={false}
                                                    loading={loading}
                                                    width="322px"
                                                />
                                            </Box>
                                        </Grid>

                                        <Grid>
                                            <Box p={1}>
                                                <StyledLink to="/register">
                                                    Cadastrar-se
                                                </StyledLink>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </form>
        </BackGround>
    );
}

export default LoginComponent;
