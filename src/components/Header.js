import React from 'react';
import Style from "styled-components"
import Logo from '../assets/logo.png'
import { StyleLink } from '../styles/style';
import { device } from './device';

const ContainerHeader = Style.div`
    display: flex;
    justify-content: space-between;
    margin-right: 40px
    `
const HeaderLogo = Style.div`
    padding: 20px 0 0 50px;
    `
const HeaderImage = Style.img`
    width: 100%
    `
const ContainerNav = Style.nav`
    display: flex;
    text-decaration: none;
    height: 88px;
    align-items: flex-end;

    @media ${device.tablet} {
    font-size: 17px;
    }
    `;
const Header = () => {
    return (
        <ContainerHeader>
            <HeaderLogo>
                <HeaderImage src={Logo} alt="Logo Kasa"></HeaderImage>
            </HeaderLogo>
            <ContainerNav>
                <StyleLink to="/">Accueil</StyleLink>
                <StyleLink to="/apropos">A Propos</StyleLink>
            </ContainerNav>
        </ContainerHeader>
    );
};
export default Header;