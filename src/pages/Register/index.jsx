import React from 'react';
import { useForm } from 'react-hook-form';

import { Grid, Box, TextField, Typography } from '@material-ui/core';
import { doRegister } from '../../services/register';

import {
    Title,
    Container,
    BackGround,
    StyledButton,
    StyledLink,
} from './styles';

import Header from '../Home/Header';

export default function Register() {
    const { register, errors, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => doRegister(data);

    return (
        <BackGround>
            <Header />
            <Container>
                <Grid container>
                    <Grid item md={3}>
                        <Box pl={1} pb={2}>
                            <Title>Novo Usuário</Title>
                        </Box>
                    </Grid>
                    <Grid item md={9}>
                        <Box pl={2} pr={2} pt={0}>
                            <Typography variant="body2" align="justify">
                                Você está a um passo de ter acesso a diversas
                                propostas do mercado imobiliário e vender seu
                                imóvel. Por favor, faça seu cadastro para ter
                                acesso a todas nossas ferramentas.
                            </Typography>
                        </Box>
                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid item md={12}>
                            <Box p={1}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Nome e Sobrenome"
                                    name="name"
                                    inputRef={register()}
                                />
                            </Box>
                        </Grid>
                        <Grid item md={12}>
                            <Box p={1}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="E-Mail"
                                    name="username"
                                    inputRef={register()}
                                />
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Box p={1}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Senha"
                                    type="password"
                                    name="password"
                                    inputRef={register()}
                                />
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Box p={1}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Digite novamente a senha"
                                    type="password"
                                />
                            </Box>
                        </Grid>
                        <Grid item md={12}>
                            <Box p={1}>
                                <StyledButton
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Cadastrar
                                </StyledButton>
                            </Box>
                        </Grid>
                    </form>
                    <Grid item={12}>
                        <Box p={1}>
                            <StyledLink to="/">
                                Clique aqui para voltar para Home
                            </StyledLink>
                        </Box>
                    </Grid>
                </Grid>
                {/* </Grid>
                </Grid> */}
            </Container>
        </BackGround>
    );
}
