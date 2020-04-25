import styled from 'styled-components';

// import { Link } from '@material-ui/core';
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
} from '../../constants/Colors';

export const Title = styled.h1`
    font-size: 26px;
    color: ${BLACK};
    font-family: Arial, Helvetica, sans-serif;
`;

export const Container = styled.div`
    max-width: 800px;
    min-height: 400px;
    background: #fff;
    /* background: linear-gradient(90deg, ${OCEAN}, ${PURPLE_0}); */

    /* opacity: 0.9; */
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin: 20px auto;
    padding: 20px;
`;

export const Header = styled.div`
    width: 1;
    height: 70px;
    /* background: #fff}; */
    /* background: linear-gradient(-180deg, ${SKYBLUE}, ${PURPLE_2}); */
    /* background: linear-gradient(90deg, ${OCEAN}, ${PURPLE_0}); */
    background: linear-gradient(90deg, ${OCEAN}, ${PURPLE_0});

    /* border-bottom: 1px solid ${BLACK}; */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);

`;

export const StyledLink = styled(Link).attrs((props) => ({
    to: props.to,
}))`
    width: 200px;
    color: ${GRAY};
    transition: 0.2s color;
    display: flex;
    justify-content: center;
    font-size: 28px;
    text-decoration: none;
    font-weight: 700;

    :hover {
        color: #fff;
        cursor: pointer;
    }
`;

export const StyledLogo = styled.img`
    align-self: center;
    padding-bottom: 5px;
`;

export const StyledHamburguerIcon = styled.a`
    display: flex;
    justify-content: center;
    justify-items: center;
    color: ${GRAY};
    transition: 0.3s color;

    :hover {
        color: #fff;
        cursor: pointer;
    }
`;
