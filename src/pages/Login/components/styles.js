import styled from 'styled-components';

import { TextField } from '@material-ui/core';

import { Link } from 'react-router-dom';

import { SKYBLUE, GRAY } from '../../../constants/Colors';

import BackgroundImage from '../../../assets/background_1.png';

export const BackGround = styled.div`
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-repeat: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
`;

export const Title = styled.h1`
    font-size: 26px;
    color: ${SKYBLUE};
    font-family: Arial, Helvetica, sans-serif;
`;

export const Container = styled.div`
    max-width: 380px;
    background: ${GRAY};
    opacity: 0.7;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin: 200px auto;
    padding: 20px;
`;

export const StyledLink = styled(Link)`
    color: ${(props) => (props.color ? props.color : SKYBLUE)};
    font-size: ${(props) => (props.size ? props.size : '16px')};
    text-decoration: none;
`;

export const StyledTextField = styled(TextField)`
    width: 322px;
`;
