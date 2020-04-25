import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import {
    Container,
    Title,
    Header,
    StyledLink,
    StyledLogo,
    StyledHamburguerIcon,
} from './styles';

import { Divider, Grid, Box } from '@material-ui/core';

import BasicInformations from '../Proposal/BasicInformations';
import PaymentInformations from '../Proposal/PaymentInformations';

import Logo from '../../assets/marca.png';

export default function Panel() {
    return (
        <>
            <Header>
                <Grid container>
                    <Grid item md={7}>
                        <Box>
                            <StyledLogo
                                src={Logo}
                                alt="Logo"
                                height="70"
                                width="320"
                            />
                        </Box>
                    </Grid>
                    <Grid item md={2}>
                        <Box p={2}>
                            <StyledLink to="/anuncios/new">
                                Novo Anuncio
                            </StyledLink>
                        </Box>
                    </Grid>
                    <Grid item md={2}>
                        <Box p={2}>
                            <StyledLink to="/propostas/new">
                                Nova Proposta
                            </StyledLink>
                        </Box>
                    </Grid>
                    <Grid item md={1}>
                        <Box p={2} pr={1}>
                            <StyledHamburguerIcon>
                                <GiHamburgerMenu size={36} />
                            </StyledHamburguerIcon>
                        </Box>
                    </Grid>
                </Grid>
            </Header>
            <Divider />
            <Container>
                {/* teste */}
                <PaymentInformations />
            </Container>
        </>
    );
}
