import React from 'react';
import Style from "styled-components"
import LogoFooter from '../assets/LogoFooter.png'
import Texte from "../assets/2020Kasa.png"

const ContainerFooter = Style.div`
    padding: 20px 0 20px;
    position: relative;
    height: 150px;
    background: #000000;
    margin: 20px 0 20px;
    `
const FooterBlockImage = Style.div`
    text-align: center;
    padding-top: 50px
    `
const FooterImage = Style.img`
 
    `
const FooterBlockText = Style.div`
    text-align: center;
    padding-top: 5px;
`
const FooterText = Style.img`
  
    `
const Footer = () => {
    return (
        <ContainerFooter>
            <FooterBlockImage>
                <FooterImage src={LogoFooter} alt="Logo Kasa">
                </FooterImage>
            </FooterBlockImage>
            <FooterBlockText>
                <FooterText src={Texte} alt="Texte Kasa"></FooterText>
            </FooterBlockText>
            
        </ContainerFooter>
    );
};

export default Footer;