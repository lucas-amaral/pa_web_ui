import React from 'react';
import styled from 'styled-components';

import { Card, CardContent } from '@material-ui/core/';

import { OCEAN, PURPLE_0, BLACK } from '../../../constants/Colors';

export const StyledCard = styled(Card)`
  width: 90%;
  height: 300px;
  border-radius: 4px;
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); */
  margin: auto;
  padding: 10px;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 20px ${OCEAN};
    transition: box-shadow 0.4s;
  }
`;

export const CardTitle = styled.h1`
  font-size: 22px;
  letter-spacing: -0.2px;
  font-weight: 700;
  color: ${PURPLE_0};
  /* background: linear-gradient(90deg, ${OCEAN}, ${PURPLE_0}); */
  text-align: justify;
  text-justify: inter-word;
  z-index: 1;
`;

export const CardSubTitle = styled.h1`
  font-size: 18px;
  letter-spacing: -0.2px;
  font-weight: 500;
  color: ${BLACK};
  z-index: 1;
  text-align: justify;
  text-justify: inter-word;
  padding-top: 20px;
`;

export const StyledAction = styled.a`
  font-size: 28px;
  text-align: center;
  padding-top: 10px;
  width: 400px;
  height: 50px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background: ${OCEAN};
`;

export default function CardContainer({ title, subtitle }) {
  return (
    <StyledCard>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubTitle>{subtitle}</CardSubTitle>
      </CardContent>
    </StyledCard>
  );
}
