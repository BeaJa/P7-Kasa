import React from 'react';
import Style from "styled-components"
import Logo from '../assets/logo.png'
import { StyleLink } from '../styles/style';
import { device } from './device';

const ContainerHeader = Style.div`
    display: flex;
    justify-content: space-between;
    margin: 0 100px;

    @media ${device.mobileM} {
        height: 70px;
        margin: 0 20px;
    }
    `
const HeaderLogo = Style.div`
    padding: 20px 0;
    `
const HeaderImage = Style.img`
    width: 210px;
    height: 68px;

    @media ${device.mobileM} {
        width: 150px;
        height: 47px;
    }
    `
const ContainerNav = Style.nav`
    display: flex;
    text-decaration: none;
    height: 88px;
    align-items: center;
    margin-top: 10px;

    @media ${device.mobileM} {
        width: 145px;
        height: 70px;
    }
    `
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