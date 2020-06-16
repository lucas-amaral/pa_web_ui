import React, { useState } from 'react';

import {
    Grid,
    Box,
    TextField,
    Typography,
    Select,
    MenuItem,
    Button,
} from '@material-ui/core';

import {
    Title,
    StyledButton,
    StyledLink,
    BackGround,
    Container,
} from './styles';

function NewProperty() {
    const [stage, setStage] = useState(1);
    return (
        <Container container style={{ marginTop: '20px' }}>
            <Grid item md={10}>
                <BackGround>
                    <Grid container>
                        <Grid item md={5}>
                            <Box pl={1} pb={2}>
                                <Title>Novo imóvel</Title>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item md={12}>
                            <Box pl={2} pr={2} pt={0}>
                                <Typography variant="body2" align="justify">
                                    Você está a um passo de ter acesso a
                                    diversas propostas do mercado imobiliário e
                                    vender seu imóvel. Por favor, faça seu
                                    cadastro para ter acesso a todas nossas
                                    ferramentas.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    {stage === 1 && (
                        <>
                            <Grid container>
                                <Grid item md={6}>
                                    <Box p={2}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Nome"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                    <Box p={2}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Descrição"
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={6}>
                                    <Box p={2}>
                                        <Select
                                            fullWidth
                                            variant="outlined"
                                            label="Tipo"
                                        >
                                            <MenuItem value={10}>Casa</MenuItem>
                                            <MenuItem value={20}>
                                                Apartamento
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Terreno
                                            </MenuItem>
                                        </Select>
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                    <Box p={2}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="area"
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={6}>
                                    <Box p={2}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Nº registro"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                    <Box p={2}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="iptu"
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </>
                    )}
                    {stage === 2 && (
                        <>
                            <Grid container>
                                <Grid item md={6}>
                                    <Box p={2}>
                                        <Select
                                            fullWidth
                                            variant="outlined"
                                            label="Numero de quartos"
                                        >
                                            <MenuItem value={20}>1</MenuItem>
                                            <MenuItem value={30}>2</MenuItem>

                                            <MenuItem value={30}>3</MenuItem>

                                            <MenuItem value={30}>
                                                4 ou mais
                                            </MenuItem>
                                        </Select>
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                    <Box p={2}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="area"
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </>
                    )}
                    {stage === 1 && (
                        <Grid item md={3} pt={1}>
                            <Box p={2}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setStage(2)}
                                >
                                    Avançar
                                </Button>
                            </Box>
                        </Grid>
                    )}
                    {stage === 2 && (
                        <Grid container>
                            <Grid item md={5} pt={1}>
                                <Box p={2}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => setStage(1)}
                                    >
                                        voltar
                                    </Button>
                                </Box>
                                <Grid item md={5} pt={1}>
                                    <Box p={2}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => setStage(2)}
                                        >
                                            Avançar
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </BackGround>
            </Grid>
        </Container>
    );
}

export default NewProperty;
