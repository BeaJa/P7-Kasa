import React from 'react';
import Style from 'styled-components'
import {device} from '../components/device'
import StarColor from '../assets/StarColor.svg'
import StarNoColor from '../assets/StarNoColor.svg'

const ContainerRating = Style.div`
    width: 100%;
    `
const RatingStar = Style.div`
    display:flex;
    height: 36px;
    justify-content: flex-end;

    @media ${device.mobileM} {
        width: 150px;
        height: 20px;
        justify-content: flex-start;
    }
    `
const Rating = ({data}) => {

    const star = Array(5).fill(0);
    // console.log(star);

    const activeStars = data.rating;
    // console.log(activeStars);

    return (
        <ContainerRating>
            <RatingStar>
            {
                star.map((_, index) => {
                     if(index < activeStars) {
                        return <img src={StarColor} key={index} alt='etoile orange' />
                    } 
                       return <img src={StarNoColor} key={index} alt='etoile grise' />
                    })
            }
            </RatingStar>
        </ContainerRating>
    )
};
export default Rating;