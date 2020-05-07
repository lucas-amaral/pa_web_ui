import React from 'react';

import { Grid, Box, TextField, Typography } from '@material-ui/core';

import {
    Title,
    Container,
    BackGround,
    StyledButton,
    StyledLink,
} from './styles';

import Header from '../Home/Header';

export default function Register() {
    return (
        <BackGround>
            <Header />
            <Container>
                <Grid container>
                    <Grid item md={6}>
                        <Box pl={2} pr={2} pt={5}>
                            <Typography variant="h5" align="justify">
                                Você está a um passo de ter acesso a diversas
                                propostas do mercado imobiliário e vender seu
                                imóvel. Por favor, faça seu cadastro para ter
                                acesso a todas nossas ferramentas.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Grid container>
                            <Grid item md={12}>
                                <Box pl={1} pb={2}>
                                    <Title>Novo Usuário</Title>
                                </Box>
                            </Grid>
                            <Grid item md={12}>
                                <Box p={1}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Nome"
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={12}>
                                <Box p={1}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="E-Mail"
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={12}>
                                <Box p={1}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="WhatsApp"
                                    />
                                </Box>
                            </Grid>
                            <Grid container>
                                <Grid item md={10}>
                                    <Box p={1}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Cidade"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item md={2}>
                                    <Box p={1}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="UF"
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item={12}>
                                <Box p={1}>
                                    <StyledLink to="/dashboard">
                                        <StyledButton
                                            size="large"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Logar
                                        </StyledButton>
                                    </StyledLink>
                                </Box>
                            </Grid>
                            <Grid item={12}>
                                <Box p={1}>
                                    <StyledLink to="/">
                                        Clique aqui para voltar para Home
                                    </StyledLink>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </BackGround>
    );
}
