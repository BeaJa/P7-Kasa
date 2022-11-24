import React from 'react';
import Style from "styled-components"
import { Link } from 'react-router-dom';
import { device } from './device';

const Container = Style.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    background-color: #F7F7F7;
    border-radius: 25px;
    padding: 50px 0;

    @media ${device.mobileM} {
        background-color: transparent;
        gap: 20px;
        padding: 0;
    }
    `
const CardImage = Style.div`
    display: flex;
    height: 340px;
    width: 340px;
    border-radius: 10px;
    flex-direction: column;
    background: linear-gradient(180deg, #FF6060 0%, rgba(0, 0, 0, 0.5) 100%);
    justify-content: flex-end;
    align-items: flex-start;

    @media ${device.mobileM} {
        height: 255px;
    }
    `
const CardLink = Style(Link)`
    text-decoration: none
    `
const CardText = Style.p`
    color: white;
    margin: 20px;

    @media ${device.mobileM} {
        font-size: 18px;
    }
    `
function Card({data}) {
      return (
        <Container>
            {
                data.map((card) => (
            <CardLink key={card.id} to={`/fichelogement/${card.id}`} >
                <CardImage>
                    <CardText >{card.title}</CardText>
                </CardImage>        
            </CardLink>
            ))
            }
        </Container>
        );
};
export default Card;