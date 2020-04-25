import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/marca.png';

export const HeaderContainer = styled.div`
    position: fixed;
    width: 100vw;
`;

export const SecondHeader = styled.div`
    width: 100vw;
    background: #fff;
    justify-content: space-between;
    display: flex;

    box-shadow: 0 0 5em rgba(0, 0, 0, 0.9);

    height: ${(props) => (props.topPage ? '18vh' : '12vh')};
    transition: height 0.5s;
    opacity: 1;
`;

export const HeaderLogo = styled(Link)`
    display: flex;
    align-content: flex-start;
    align-items: center;
`;

export const HeaderLinksContainer = styled.div`
    display: flex;
    align-content: flex-end;
    align-items: center;
`;

export const HeaderLinks = styled(Link).attrs((props) => ({
    to: props.to,
}))`
    text-transform: none;
    font-size: 22px;
    letter-spacing: -0.2px;
    font-weight: 600;
    color: #0c154a;
    cursor: pointer;
    padding-right: 35px;
    text-decoration: none;
`;

export default function Header() {
    const [topPage, setTopPage] = useState(true);

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 30) {
            // setOptionBoxIsVisible(true);
            setTopPage(false);
        } else {
            setTopPage(true);
        }
    };

    useEffect(() => {
        window.onscroll = () => handleScroll();
    });

    return (
        <HeaderContainer>
            <SecondHeader topPage={topPage}>
                <HeaderLogo to="/">
                    <img src={Logo} alt="Logo" height="100" width="380" />
                </HeaderLogo>
                <HeaderLinksContainer>
                    <HeaderLinks> Fale Conosco </HeaderLinks>
                    <HeaderLinks> Sobre Nós </HeaderLinks>
                    <HeaderLinks to="/logon">Acessar Sistema</HeaderLinks>
                </HeaderLinksContainer>
            </SecondHeader>
        </HeaderContainer>
    );
}
