import React from 'react';
import Style from "styled-components"
import { Link } from 'react-router-dom';

const CardRectangle = Style.div`
    display: flex;
    height: 340px;
    width: 340px;
    border-radius: 10px;
    flex-direction: column;
    margin: 20px 
    `
const CardImage = Style.div`
    display: flex;
    height: 340px;
    width: 340px;
    border-radius: 10px;
    background: linear-gradient(180deg, #FF6060 0%, rgba(0, 0, 0, 0.5) 100%);
    align-items: end;
    `
const CardText = Style.p`
    color: white;
    margin: 20px;
    text-decoration: none;
    `
function Cards({locations}) {
    // console.log(locations.id);
      const cardId = locations.id;
    //   console.log(cardId);

      return (
        <Link key={cardId} to={`ficheloc/${cardId}`} >
            <CardRectangle>
                <CardImage>
                    <CardText>{locations.title}</CardText>
                </CardImage>
            </CardRectangle>
            </Link>
        );

};
export default Cards;