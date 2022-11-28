import React from 'react';
import styled from 'styled-components'
import {device} from '../components/device'
import StarColor from '../assets/StarOrange.svg'
import StarNoColor from '../assets/StarGrey.svg'

const ContainerRating = styled.div`
    width: 100%;
    `
const RatingStar = styled.div`
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

    const activeStars = data.rating;

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