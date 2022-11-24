import React from 'react';
import Style from "styled-components"
import LogoFooter from '../assets/LogoFooter.png'
import Texte from "../assets/2020Kasa.png"

const ContainerFooter = Style.div`
    padding: 20px 0 20px;
    height: 150px;
    background: #000000;
    margin: 150px 0 0;
    bottom: 0;
    `
const FooterBlockImage = Style.div`
    text-align: center;
    padding-top: 50px
    `
const FooterBlockText = Style.div`
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
                <img src={Texte} alt="Texte Kasa" />
            </FooterBlockText>
        </ContainerFooter>
    );
};

export default Footer;