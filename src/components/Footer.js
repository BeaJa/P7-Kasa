import React from 'react';
import styled from "styled-components"
import LogoFooter from '../assets/LogoFooter.png'
import TexteFooter from "../assets/2020Kasa.png"
import { device } from './device';

const ContainerFooter = styled.div`
    padding: 20px 0 20px;
    height: 150px;
    background: #000000;
    margin-top: 200px;

    @media ${device.mobileM} {
        margin-top: 140px;
    }
    `
const FooterBlockImage = styled.div`
    text-align: center;
    padding-top: 50px;
    `
const FooterBlockText = styled.div`
    text-align: center;
    padding-top: 5px;
    `
const Footer = () => {
    return (
        <ContainerFooter>
            <FooterBlockImage>
                <img src={LogoFooter} alt="Logo Kasa" />
            </FooterBlockImage>
            <FooterBlockText>
                <img src={TexteFooter} alt="Texte Kasa" />
            </FooterBlockText>
        </ContainerFooter>
    );
};

export default Footer;