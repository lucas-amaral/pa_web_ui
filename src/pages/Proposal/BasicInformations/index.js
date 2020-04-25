import React, { useState, useEffect } from 'react';

import {
    Grid,
    Box,
    TextField,
    Typography,
    Select,
    InputLabel,
    MenuItem,
    Input,
    Button,
} from '@material-ui/core';

import { StyledSelect } from './styles';

export default function BasicInformations() {
    return (
        <Grid container>
            <Grid item md={12}>
                <Typography align="center" variant="h4">
                    Cadastro de Novo Anúncio
                </Typography>
                <Typography align="justify" variant="h6">
                    Você está a um passo de ter acesso a diversas propostas do
                    mercado imobiliário e vender seu imóvel. Por favor, informe
                    o tipo e as características minimas do imóvel que está
                    anunciando!
                </Typography>
                <Typography
                    align="justify"
                    variant="h6"
                    style={{ paddingTop: '10px' }}
                >
                    DICA: O imóvel dos sonhos pode ser de um tipo diferente,
                    surpreenda-se!
                </Typography>
            </Grid>
            <Grid item md={12} style={{ paddingTop: '30px' }}>
                <Box pt={2}>
                    <Grid container>
                        <Grid item md={2}>
                            <Box p={1}>
                                <Typography variant="h6">Estado</Typography>
                                <Input fullWidth />
                            </Box>
                        </Grid>

                        <Grid item md={5}>
                            <Box p={1}>
                                <Typography variant="h6">Cidade</Typography>
                                <Input fullWidth />
                            </Box>
                        </Grid>
                        <Grid item md={5}>
                            <Box p={1}>
                                <Typography variant="h6">Bairro</Typography>
                                <Input fullWidth />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={6}>
                            <Box p={1}>
                                <Typography variant="h6">Endereço</Typography>
                                <Input fullWidth />
                            </Box>
                        </Grid>
                        <Grid item md={1}>
                            <Box p={1}>
                                <Typography variant="h6">Número</Typography>
                                <Input fullWidth />
                            </Box>
                        </Grid>
                        <Grid item md={5}>
                            <Box p={1}>
                                <Typography variant="h6">
                                    Complemento
                                </Typography>
                                <Input fullWidth />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={3}>
                            <Box p={1}>
                                <InputLabel id="select-type-home">
                                    <Typography variant="h6">
                                        Tipo do Imóvel
                                    </Typography>
                                </InputLabel>
                                <StyledSelect
                                    labelId="select-type-home"
                                    id="select-type-home"
                                    fullWidth
                                >
                                    <MenuItem value="Casa">Casa</MenuItem>
                                    <MenuItem value="Apartamento">
                                        Apartamento
                                    </MenuItem>
                                    <MenuItem value="Chacara">Chácara</MenuItem>
                                    <MenuItem value="Terreno">Terreno</MenuItem>
                                    <MenuItem value="Sobrado">Sobrado</MenuItem>
                                </StyledSelect>
                            </Box>
                        </Grid>
                        <Grid item md={3}>
                            <Box p={1}>
                                <InputLabel id="select-number-bedrooms">
                                    <Typography variant="h6">
                                        Nº de Dormitórios
                                    </Typography>
                                </InputLabel>
                                <StyledSelect
                                    labelId="select-number-bedrooms"
                                    id="select-number-bedrooms"
                                    fullWidth
                                >
                                    <MenuItem value="01">01</MenuItem>
                                    <MenuItem value="02">02</MenuItem>
                                    <MenuItem value="03">03</MenuItem>
                                    <MenuItem value="04">04</MenuItem>
                                    <MenuItem value="05 ou mais">
                                        05 ou mais
                                    </MenuItem>
                                </StyledSelect>
                            </Box>
                        </Grid>
                        <Grid item md={3}>
                            <Box p={1}>
                                <InputLabel id="select-number-garage">
                                    <Typography variant="h6">
                                        Nº Vagas de Garagem
                                    </Typography>
                                </InputLabel>
                                <StyledSelect
                                    labelId="select-number-garage"
                                    id="select-number-garage"
                                    fullWidth
                                >
                                    <MenuItem value="00">00</MenuItem>
                                    <MenuItem value="01">01</MenuItem>
                                    <MenuItem value="02">02</MenuItem>
                                    <MenuItem value="03">03</MenuItem>
                                    <MenuItem value="04 ou mais">
                                        04 ou mais
                                    </MenuItem>
                                </StyledSelect>
                            </Box>
                        </Grid>
                        <Grid item md={3}>
                            <Box p={1}>
                                <InputLabel id="select-number-bathroom">
                                    <Typography variant="h6">
                                        Nº de Banheiros
                                    </Typography>
                                </InputLabel>
                                <StyledSelect
                                    labelId="select-number-bathroom"
                                    id="select-number-bathroom"
                                    fullWidth
                                >
                                    <MenuItem value="01">01</MenuItem>
                                    <MenuItem value="02">02</MenuItem>
                                    <MenuItem value="03">03</MenuItem>
                                    <MenuItem value="04 ou mais">
                                        04 ou mais
                                    </MenuItem>
                                </StyledSelect>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container align="center">
                        <Grid item md={12}>
                            <Box p={4}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                >
                                    <Typography variant="h5">
                                        Salvar e Continuar
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}
