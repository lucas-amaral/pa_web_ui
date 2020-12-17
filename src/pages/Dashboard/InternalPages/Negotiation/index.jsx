import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Skeleton } from '@material-ui/lab';
import { Container } from '../User/styles';
import {
  LOAD_NEGOTIATION_BY_INTEREST,
  LOAD_NEGOTIATION_BY_SALE,
  SET_NOTIFICATION,
} from '../../../../constants/ActionTypes';
import { Title } from '../../../Register/styles';
import GridBox from '../../../../components/GridBox';
import SaleCard from '../../../../components/Card/SaleCard';
import InterestCard from '../../../../components/Card/InterestCard';

export default function Negotiation() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.user.username);
  const interest = useSelector((state) => state.interest.interest);
  const sale = useSelector((state) => state.sale.sale);
  const {
    negotiationsBySale,
    negotiationsByInterest,
    loadingData,
  } = useSelector((state) => state.negotiation);

  useEffect(() => {
    dispatch({
      type: LOAD_NEGOTIATION_BY_INTEREST,
      data: { username },
    });
    dispatch({
      type: LOAD_NEGOTIATION_BY_SALE,
      data: { username },
    });

    function checkNegotiations() {
      if (
        (!negotiationsByInterest || negotiationsByInterest.length === 0) &&
        (!negotiationsBySale || negotiationsBySale.length === 0)
      ) {
        dispatch({
          type: SET_NOTIFICATION,
          notification: {
            message: 'Você não possui negociações em andamento no momento',
          },
        });
      }
    }

    checkNegotiations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={{ minHeight: 600 }}>
      {interest.id && (
        <>
          <Grid container>
            <Grid item md={12}>
              <Box pl={1} pb={2}>
                <Title>Imóveis para análise</Title>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            {negotiationsByInterest?.map((negotiation) => {
              return (
                <GridBox key={negotiation.id}>
                  <SaleCard id={negotiation.id} sale={negotiation.sale} />
                </GridBox>
              );
            })}
          </Grid>
        </>
      )}
      {sale &&
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
                <InterestCard
                  id={negotiation.id}
                  interest={negotiation.interest}
                />
              </GridBox>
            </Grid>
          </Grid>
        ))}

      {loadingData && (
        <Skeleton variant="rect" animation="wave" height={400} width={300}>
          <InterestCard/>
        </Skeleton>
      )}
    </Container>
  );
}
