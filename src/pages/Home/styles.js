import styled from 'styled-components';

import { Button, Grid } from '@material-ui/core';

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

import BackgroundImage from '../../assets/background_1.png';
import BackgroundImage_2 from '../../assets/background_2.png';
import BackgroundImage_3 from '../../assets/agente.jpg';

import { Link } from 'react-router-dom';

export const BackGround = styled.div`
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-repeat: cover;
    width: 100vw;
    height: 150vh;
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
    margin: 100px auto;
    padding: 30px;
`;

export const ContainerRoot = styled.div`
    width: 100%;
    background-image: url(${BackgroundImage});
`;

export const StyledButton = styled(Button)`
    width: 305px;
`;

export const StyledLink = styled(Link).attrs(() => ({
    color: 'inherit',
    variant: 'body1',
}))``;

// export const Input = styled.input`
//     padding: 8px;
//     min-width: 250px;
// `;

export const Header = styled(Grid)`
    width: 100vw;
    height: 5vh;
    background: linear-gradient(90deg, ${OCEAN}, ${PURPLE_0});
    /* opacity: 0.9; */
    opacity: 1;
`;

export const FirstBody = styled.div`
    width: 100vw;
    height: 110vh;
    padding-top: 13vh;
`;

export const BackgroundBody = styled.div`
    /* background: linear-gradient(-180deg, ${OCEAN}, ${GRAY}); */
    background: url(${BackgroundImage_2});
    background-size: cover;
    background-repeat: cover;
    width: 100vw;
    height: 110vh;
    z-index: -1;
    padding: 0px;
    margin: 0px;
    position: absolute;
`;

export const SecondBody = styled.div`
    width: 100vw;
    height: 30vw;
    background: linear-gradient(-180deg, #fff, ${GRAY});
    display: flex;
    align-items: center;
    /* background: ${OCEAN}; */
    /* background: linear-gradient(90deg, ${OCEAN}, ${PURPLE_0}); */

    /* background: linear-gradient(-180deg, ${OCEAN}, ${BLACK}); */

`;

export const Footer = styled(Grid)`
    width: 100vw;
    height: 30vh;

    /* background: ${BLACK}; */
    background: linear-gradient(90deg, ${OCEAN}, ${PURPLE_0});
`;

export const BodyPhraseOne = styled.h1`
    font-size: 42px;
    letter-spacing: -0.2px;
    font-weight: 700;
    color: #fff;
    z-index: 1;
`;

export const BodyOnePhraseContent = styled.div`
    width: 50vw;
    height: 40vh;
    padding-left: 10%;
    padding-top: 7%;
    z-index: 1;

    /* display: ${(props) => (!props.visible ? 'none' : 'block')};
    transition-property: display;
    transition-duration: 2s; */
`;
