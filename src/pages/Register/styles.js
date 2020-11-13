import styled from 'styled-components';

import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

import { SKYBLUE, GRAY } from '../../constants/Colors';

import BackgroundImage from '../../assets/background_1.png';

export const BackGround = styled.div`
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-repeat: cover;
    width: 100vw;
    height: 120vh;
    position: fixed;
`;

export const Title = styled.h1`
    font-size: 26px;
    color: ${SKYBLUE};
    font-family: Arial, Helvetica, sans-serif;
`;

export const Container = styled.div`
    max-width: 880px;
    background: ${GRAY};
    opacity: 0.9;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin: 150px auto;
    padding: 20px;
`;

export const ContainerRoot = styled.div`
    width: 100%;
    background-image: url(${BackgroundImage});
`;

export const StyledButton = styled(Button)`
    width: 400px;
`;

export const StyledLink = styled(Link)`
    color: ${(props) => (props.color ? props.color : SKYBLUE)};
    font-size: ${(props) => (props.size ? props.size : '16px')};
    text-decoration: none;
`;
