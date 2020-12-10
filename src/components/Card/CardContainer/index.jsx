import React from 'react';
import styled from 'styled-components';

import { Card, CardContent } from '@material-ui/core/';

import { PURPLE_0, BLACK } from '../../../constants/Colors';

export const StyledCard = styled(Card)`
  width: 90%;
  height: 300px;
  border-radius: 4px;
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); */
  margin: auto;
  padding: 15px;
  line-height: 1.4;
`;

export const CardTitle = styled.h1`
  font-size: 24px;
  letter-spacing: -0.2px;
  font-weight: 700;
  color: ${PURPLE_0};
  text-align: justify;
  text-justify: inter-word;
  z-index: 1;
`;

export const CardSubTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${BLACK};
  z-index: 1;
  text-align: justify;
  text-justify: inter-word;
  padding-top: 20px;
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
