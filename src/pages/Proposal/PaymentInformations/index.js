import React, { useState } from 'react';

import {
    Grid,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Box,
    Input,
    Button,
} from '@material-ui/core';

export default function PaymentInformations() {
    const [paymentMethod, setPaymentMethod] = React.useState('dinheiro');

    const handlePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <Grid container>
            <Grid item md={12}>
                <Typography align="center" variant="h5">
                    Cadastro de Novo Anúncio
                </Typography>
                <Typography align="justify" variant="body1">
                    Você está a um passo de ter acesso a diversas propostas do
                    mercado imobiliário e vender seu imóvel Por favor, informe
                    como você pretende pagar o imóvel que está buscando
                </Typography>
                <Typography
                    align="justify"
                    variant="body2"
                    style={{ paddingTop: '10px' }}
                >
                    DICA: Informe o valor máximo que você realmente tem para
                    negociar, quanto maior os valores mais imóveis nosso sistema
                    poderá apresentar.
                </Typography>
            </Grid>
            <Grid md={12}>
                <Grid item md={6}>
                    <Box p={1}>
                        <Typography align="justify" variant="body2">
                            * Informe valor máximo que pretende pagar pelo
                            imóvel:
                        </Typography>
                        <Input fullWidth placeholder="R$: 200.000" />
                    </Box>
                </Grid>
            </Grid>
            <Grid md={12} style={{ paddingTop: '20px' }}>
                <Box pl={1}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                            Selecione o método que pretende realizar o
                            pagamento:
                        </FormLabel>
                        <RadioGroup
                            aria-label="payment"
                            name="payment"
                            value={paymentMethod}
                            onChange={handlePaymentMethod}
                        >
                            <FormControlLabel
                                value="dinheiro"
                                control={<Radio />}
                                label="Dinheiro á vista"
                            />
                            <FormControlLabel
                                value="financiamento"
                                control={<Radio />}
                                label="Financiamento, Carta de Cŕedito"
                            />
                            <FormControlLabel
                                value="permuta"
                                control={<Radio />}
                                label="Dinheiro juntamente com Permuta/Troca"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>
            {paymentMethod === 'dinheiro' && (
                <Grid md={12}>
                    <Box p={1}>
                        <Typography align="left" variant="body2">
                            Selecionado: Pagamento à vista
                        </Typography>
                    </Box>
                </Grid>
            )}
            {paymentMethod === 'financiamento' && (
                <Grid container>
                    <Grid item md={12}>
                        <Box p={1}>
                            <Typography align="left" variant="body2">
                                Selecionado: Pagamento através de financiamento
                                ou carta de crédito.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Box p={1}>
                            <FormLabel component="legend">
                                Informe o valor que será liberado no
                                financiamento ou carta de crédito.
                            </FormLabel>
                            <Input placeholder="R$: 140.000" />
                        </Box>
                    </Grid>
                </Grid>
            )}
            <Grid container align="center">
                <Grid item md={6}>
                    <Box pt={2}>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            Voltar para etapa anterior
                        </Button>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box pt={2}>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            Confirmar dados e visualizar ofertas
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}
