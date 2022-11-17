import React from 'react';
import { Link } from 'react-router-dom';
import Style from 'styled-components'
import { device } from '../components/device';

const ErrorContainer = Style.div`
    display: flex;   
    justify-content: space-evenly 
    `
const ErrorContent = Style.div`
    display: flex;
    flex-direction: column;
    margin: 70px 0;
    `
const Content = Style.h1`
    text-align: center;
    align-items: center;
    font-weight: 700;
    font-size: 288px;
    color: #FF6060;
    margin: 0;

    @media ${device.tablet} {
        font-size: 120px;
    }
    `
const ErrorText = Style.p`
    font-weight: 500;
    font-size: 36px;
    align-items: flex-end;
    color: #FF6060;

    @media ${device.tablet} {
        text-align: center;
        font-size: 20px;
    }
    `
const ErrorLink = Style(Link)`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    color: #FF6060;
    margin-top: 90px;
    text-decoration: none;
    &:hover {
    text-decoration: underline;
    }
    @media ${device.tablet} {
        font-size: 16px;
    }
    `

const Error404 = () => {
    return (
        <ErrorContainer>
            <ErrorContent>
                <Content>404</Content>
                <ErrorText>Oups ! La page que vous demandez n'existe pas.</ErrorText>
                <ErrorLink to='/'>Retourner à la page d'Accueil</ErrorLink>
            </ErrorContent>
        </ErrorContainer>
    );
};

export default Error404;