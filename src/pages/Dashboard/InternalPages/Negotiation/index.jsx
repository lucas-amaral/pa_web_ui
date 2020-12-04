import { Box, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../../../Register/styles';
import { Container } from '../User/styles';
import GridBox from '../../../../components/GridBox';
import SaleCard from '../../../../components/Card/SaleCard';
import InterestCard from '../../../../components/Card/InterestCard';
import { LOAD_SALE } from '../../../../constants/ActionTypes';

export default function Negotiation() {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.user.username);
    const interest = useSelector((state) => state.interest.interest);
    const sale = useSelector((state) => state.sale.sale);
    const properties = [
        { id: 4, description: 'Casa bacana' },
        { id: 5, description: 'Casa de praia' },
        { id: 6, description: 'Apartamento bem localizado' },
    ];

    useEffect(() => {
        dispatch({
            type: LOAD_SALE,
            data: 4,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            {/* {interest && ( */}
            {/*    <> */}
            {/*        <Grid container> */}
            {/*            <Grid item md={12}> */}
            {/*                <Box pl={1} pb={2}> */}
            {/*                    <Title>Imóveis para análise</Title> */}
            {/*                </Box> */}
            {/*            </Grid> */}
            {/*        </Grid> */}
            {/*        <Grid container> */}
            {/*            <GridBox> */}
            {/*                <SaleCard sale={sale} /> */}
            {/*            </GridBox> */}
            {/*            <GridBox> */}
            {/*                <SaleCard sale={sale} /> */}
            {/*            </GridBox> */}
            {/*            <GridBox> */}
            {/*                <SaleCard sale={sale} /> */}
            {/*            </GridBox> */}
            {/*        </Grid> */}
            {/*    </> */}
            {/* )} */}

            {/* {properties && ( */}
            {/*    properties.map((property) => */}
            {/*        <Grid container> */}
            {/*            <Grid item md={12} key={property.id}> */}
            {/*                <Box pl={1} pb={2}> */}
            {/*                    <Title style={{fontSize: '20px' }}>Propostas ({property.description})</Title> */}
            {/*                </Box> */}
            {/*            </Grid> */}
            {/*            <Grid container> */}
            {/*                <GridBox> */}
            {/*                    <InterestCard interest={interest} /> */}
            {/*                </GridBox> */}
            {/*            </Grid> */}
            {/*        </Grid> */}
            {/*    ) */}
            {/* )} */}
        </Container>
    );
}
