import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeft from '../assets/ArrowLeft.svg'
import ArrowRight from '../assets/ArrowRight.svg'
import { device } from './device';

const CarouselContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    justify-content: center;
    `
const CarouselArrow = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    align-items: center;
    height: 450px;
    justify-content: space-between;

    @media ${device.mobileM} {
        height: 255px;
    }
    `
const ImgArrowLeft = styled.img`
    top: 50%;
    font-size: 2rem;
    margin: 0 10px;
    cursor: pointer;
    
    @media ${device.mobileM} {
        width: 24px;
        height: 40px;
    }
    `
const ImgArrowRight = styled.img`
    top: 50%;
    font-size: 2rem;
    margin: 0 10px;
    cursor: pointer;

    @media ${device.mobileM} {
        width: 24px;
        height: 40px;
    }
    `
const CarouselItem = styled.div`
    width: 100%;
    align-items: center;
    `
const View = styled.img`
    display: inline-block;
    width: 100%;
    height: 450px;
    border-radius: 25px;
    object-fit: cover;

    @media ${device.mobileM} {
        height: 255px;
    }
    `

function Carousel ({pictures}) {

    const [current, setCurrent] = useState(0);

    const nbPictures = pictures.length;

    const nextPicture = () => {
        setCurrent(current === nbPictures - 1 ? 0 : current + 1);
    };

    const prevPicture = () => {
        setCurrent(current === 0 ? nbPictures - 1 : current - 1);
    };

    if ( nbPictures === 1 ) {
        return <View src={pictures[0]} alt='Photo appartement'></View>
    }

    return (
        <CarouselContainer>
             <CarouselArrow>
                <ImgArrowLeft src={ArrowLeft} onClick={prevPicture} />
                <ImgArrowRight src={ArrowRight} onClick={nextPicture} />
            </CarouselArrow>
                {
                pictures.map((picture, index) => {
                    return (
                        <CarouselItem key={index}>
                            {index === current && 
                            <View src={picture} alt='Photo appartement' />}
                        </CarouselItem>
                    )
                })}
        </CarouselContainer>
    )
};
export default Carousel;