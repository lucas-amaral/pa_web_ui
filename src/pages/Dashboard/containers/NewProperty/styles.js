import styled from 'styled-components';

import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

import {
    SKYBLUE,
    OCEAN,
    BLACK,
    GRAY,
    PURPLE_0,
    PURPLE_1,
    PURPLE_2,
    PURPLE_3,
} from '../../../../constants/Colors';

export const BackGround = styled.div`
    background: #fff;
`;

export const Title = styled.h1`
    font-size: 26px;
    color: ${SKYBLUE};
    font-family: Arial, Helvetica, sans-serif;
`;

export const Container = styled.div``;

export const ContainerRoot = styled.div`
    width: 100%;
`;

export const StyledButton = styled(Button)`
    width: 400px;
`;

export const StyledLink = styled(Link)``;
