import React from 'react';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { device } from './device';

const CardContainer = styled.div`
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
        padding: 0 ;
    }
    `
const CardLink = styled(Link)`
    &:hover {
        text-decoration: none;
    }
    `
const CardImage = styled.div`
    display: flex;
    height: 340px;
    width: 340px;
    border-radius: 10px;
    flex-direction: column;
    
    @media ${device.mobileM} {
        height: 255px;
        margin: 0 20px;
    }
    `
const Cover = styled.img`
    width: 340px;
    height: 340px;
    border-radius: 10px 10px 0 0;

    @media ${device.mobileM} {
        height: 195px;
    }
    `
const CardText = styled.div`
    display: flex;
    align-items: center;
    height: 90px;
    border-radius: 0 0 10px 10px;
    background: linear-gradient(180deg, #FF6060 0%, rgba(0, 0, 0, 0.5) 100%); 

    @media ${device.mobileM} {
        height: 60px;
    }
    `
const Text = styled.p`
    color: #FFFFFF;
    margin: 0 20px;

    @media ${device.mobileM} {
        font-size: 18px;
    }
`
function Card({data}) {
      return (
        <CardContainer>
            {
            data.map((card) => (
            <CardLink key={card.id} to={`/logement/${card.id}`} >
                <CardImage>
                    <Cover src={card.cover}></Cover>
                    <CardText>
                        <Text>{card.title}</Text>
                    </CardText>
                </CardImage>        
            </CardLink>
            ))
            }
        </CardContainer>
        );
};
export default Card;