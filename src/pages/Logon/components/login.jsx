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

function LoginComponent({ onSubmit }) {
    const { register, handleSubmit } = useForm();

    return (
        <BackGround>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Header />
                <Grid container justify="center" alignItems="center">
                    <Grid item md="12">
                        <Container>
                            <Grid container>
                                <Grid item>
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
                                                    type="password"
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
                                                    Ainda não possuí cadastro?
                                                    Clique aqui e faça já o seu
                                                </StyledLink>
                                            </Box>
                                            {/* {loginInvalid && (
                                        <Box p={1}>
                                            <StyledLink
                                                to="/register"
                                                color="red"
                                            >
                                                Login inválido,
                                                tente novamente
                                            </StyledLink>
                                        </Box>
                                    )} */}
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
