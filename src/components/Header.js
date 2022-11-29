import React from 'react';
import styled from "styled-components"
import LogoHeader from '../assets/LogoHeader.png'
import { StyledLink } from '../styles/style';
import { device } from './device';

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 100px;

    @media ${device.mobileM} {
        height: 70px;
        margin: 0 20px;
    }
    `
const HeaderLogo = styled.div`
    padding: 20px 0;
    `
const HeaderImage = styled.img`
    width: 210px;
    height: 68px;

    @media ${device.mobileM} {
        width: 150px;
        height: 47px;
    }
    `
const HeaderNavigation = styled.div`
    display: flex;
    height: 88px;
    align-items: center;
    margin-top: 10px;

    @media ${device.mobileM} {
        width: 145px;
        height: 70px;
    }
    `
const LinkDiv = styled.div`
    margin: 0 10px;

    @media ${device.mobileM} {
        margin: 0 2px;
    }
`
const Header = () => {
    return (
        <ContainerHeader>
            <HeaderLogo>
                <HeaderImage src={LogoHeader} alt="Logo Kasa"></HeaderImage>
            </HeaderLogo>
            <HeaderNavigation>
                <LinkDiv>
                    <StyledLink to="/" style={({isActive}) => ({textDecoration: isActive ? 'underline' : 'none'})}>Accueil</StyledLink>
                </LinkDiv>
                <LinkDiv>
                    <StyledLink to="/apropos" style={({isActive}) => ({textDecoration: isActive ? 'underline' : 'none'})}>A Propos</StyledLink>
                </LinkDiv>
            </HeaderNavigation>
        </ContainerHeader>
    );
};
export default Header;