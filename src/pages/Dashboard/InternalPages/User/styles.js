import styled from 'styled-components';

import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { SKYBLUE } from '../../../../constants/Colors';

export const Title = styled.h1`
  font-size: 26px;
  color: ${SKYBLUE};
  font-family: Arial, Helvetica, sans-serif;
`;

export const Container = styled.div`
  opacity: 0.9;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const StyledButton = styled(Button)`
  width: 400px;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => (props.color ? props.color : SKYBLUE)};
  font-size: ${(props) => (props.size ? props.size : '16px')};
  text-decoration: none;
`;
