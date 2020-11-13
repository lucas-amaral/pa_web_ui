import React from 'react';
import { useForm } from 'react-hook-form';

import { Grid, Box } from '@material-ui/core';

import {
    Title,
    Container,
    BackGround,
    StyledButton,
    StyledLink,
    StyledTextField,
} from './styles';

import Header from '../../Home/Header';

function LoginComponent({ onSubmit, loginInvalid }) {
    const { register, handleSubmit, errors } = useForm();

    return (
        <BackGround>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*{error && <Message content={error?.detail} negative />}*/}
                <Header/>
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
                                                    inputRef={register({
                                                        required: 'Digite o seu e-mail',
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                            message: 'Digite um e-mail válido',
                                                        },
                                                    })}
                                                    required
                                                />
                                                {errors.email && <p className="error">{errors.email.message}</p>}
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

                                        <Grid>
                                            <Box p={1}>
                                                <StyledLink to="/register">
                                                    Ainda não possuí cadastro? Clique aqui e faça já o seu
                                                </StyledLink>
                                            </Box>
                                            {loginInvalid && (
                                                <Box p={1}>
                                                    <StyledLink to="/login" color="red">
                                                        Login inválido, tente novamente
                                                    </StyledLink>
                                                </Box>
                                            )}
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
