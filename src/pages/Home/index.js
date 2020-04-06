import React from 'react';

import { Grid, Box, TextField } from '@material-ui/core';

import {
    Title,
    Container,
    BackGround,
    StyledButton,
    StyledLink,
} from './styles';

// import BackgroundImage from '../../assets/background_1.png';

export default function Home() {
    return (
        <BackGround>
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
                                label="Senha"
                            />
                        </Box>
                    </Grid>
                    <Grid item={12}>
                        <Box p={1}>
                            <StyledButton variant="contained" color="primary">
                                Logar
                            </StyledButton>
                        </Box>
                    </Grid>

                    <Grid item={12}>
                        <Box p={1}>
                            <StyledLink>
                                Ainda não possuí cadastro? Clique aqui e faça já
                                o seu
                            </StyledLink>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </BackGround>
    );
}
