import React from 'react';
import Style from 'styled-components'
// import StarColor from '../assets/StarColor.svg'
// import StarNoColor from '../assets/StarNoColor.svg'
import {FaStar} from 'react-icons/fa'

const ContainerRating = Style.div`
    width: 100%;
    `
const RatingStar = Style.div`
    display:flex;
    height: 36px;
    justify-content: flex-end;
    `
// const StarImg = Style.img`
//     margin: 0 5px;
//     `
const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9'
}

const Rating = ({data}) => {

    const stars = data;
    console.log(stars);

    const id = data.id;
    console.log(id);

    // const star = StarColor;
    // console.log(star);
    
    const star = Array(5).fill(0);
    console.log(star);

    const activeStars = data.rating;
    console.log(activeStars);

    const Stars = Array.from(String(activeStars));
    console.log(Stars);

    // const totalStars = 5;
    for (let i=1; i <= Stars ; i++) {
        console.log("0".repeat(activeStars));
    }

    const tab = {
        'id' : id,
        'rating': parseInt(activeStars),
    }
    console.log(tab);

    return (
        <ContainerRating>
            <RatingStar>
            {
                star.map((_, index) => {
                    return (
                        <FaStar key={index} color={colors.grey} size={32} />
                    )
                })
            }
                
            </RatingStar>
        </ContainerRating>
    )
};

export default Rating;