import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Container } from '../User/styles';
import {
  LOAD_NEGOTIATION_BY_INTEREST,
  LOAD_NEGOTIATION_BY_SALE,
} from '../../../../constants/ActionTypes';
import { Title } from '../../../Register/styles';
import GridBox from '../../../../components/GridBox';
import SaleCard from '../../../../components/Card/SaleCard';
import InterestCard from '../../../../components/Card/InterestCard';

export default function Negotiation() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.user.username);
  const { negotiationsBySale, negotiationsByInterest } = useSelector(
    (state) => state.negotiation
  );

  useEffect(() => {
    dispatch({
      type: LOAD_NEGOTIATION_BY_INTEREST,
      data: { username },
    });
    dispatch({
      type: LOAD_NEGOTIATION_BY_SALE,
      data: { username },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {negotiationsByInterest && (
        <>
          <Grid container>
            <Grid item md={12}>
              <Box pl={1} pb={2}>
                <Title>Imóveis para análise</Title>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            {negotiationsByInterest.map((negotiation) => {
              return (
                <GridBox key={negotiation.id}>
                  <SaleCard sale={negotiation.sale} />
                </GridBox>
              );
            })}
          </Grid>
        </>
      )}
      {negotiationsBySale &&
        negotiationsBySale.map((negotiation) => (
          <Grid container key={negotiation.id}>
            <Grid item md={12}>
              <Box pl={1} pb={2}>
                <Title style={{ fontSize: '20px' }}>
                  Propostas ({negotiation.sale.description})
                </Title>
                </Box>
            </Grid>
            <Grid container>
            <GridBox key={negotiation.interest.id}>
              <InterestCard interest={negotiation.interest} />
            </GridBox>
            </Grid>
          </Grid>
        ))}
    </Container>
  );
}
