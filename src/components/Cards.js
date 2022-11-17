import React from 'react';
import Style from "styled-components"
import { Link } from 'react-router-dom';

const Container = Style.div`
    display: grid;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: #F7F7F7;
    border-radius: 25px;
    padding: 20px 0 20px;
    `
const CardRectangle = Style.div`
    display: flex;
    height: 300px;
    width: 300px;
    border-radius: 10px;
    flex-direction: column;
    margin: 20px 
    `
const CardImage = Style.div`
    display: flex;
    height: 300px;
    width: 300px;
    border-radius: 10px;
    background: linear-gradient(180deg, #FF6060 0%, rgba(0, 0, 0, 0.5) 100%);
    align-items: end;
    `
const CardLink = Style(Link)`
    text-decoration: none
    `
const CardText = Style.p`
    color: white;
    margin: 20px;
    `
function Card({data}) {
    // console.log(data);
    
      return (
        <Container>
            {
                data.map((card) => (
      
            <CardLink key={card.id} to={`/ficheloc/${card.id}`} >
            <CardRectangle>
                <CardImage>
                <CardText >{card.title}</CardText>
                   
                </CardImage>        
            </CardRectangle>
            </CardLink>
            ))
            }
        </Container>
        );

};
export default Card;