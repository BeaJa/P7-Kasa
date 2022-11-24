import React, { useState } from 'react';
import Style from 'styled-components';
import ArrowLeft from '../assets/ArrowLeft.svg'
import ArrowRight from '../assets/ArrowRight.svg'
import { device } from './device';

const CarouselContainer = Style.div`
    position: relative;
    display: inline-block;
    width: 100%;
    justify-content: center;
    `
const CarouselArrow = Style.div`
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
const ImgArrowLeft = Style.img`
    top: 50%;
    font-size: 2rem;
    margin: 0 10px;
    cursor: pointer;
    
    @media ${device.mobileM} {
        width: 24px;
        height: 40px;
    }
    `
const ImgArrowRight = Style.img`
    top: 50%;
    font-size: 2rem;
    margin: 0 10px;
    cursor: pointer;

    @media ${device.mobileM} {
        width: 24px;
        height: 40px;
    }
    `
const CarouselItem = Style.div`
    width: 100%;
    align-items: center;
    `
const View = Style.img`
    display: inline-block;
    width: 100%;
    height: 450px;
    border-radius: 25px;
    object-fit: cover;

    @media ${device.mobileM} {
        height: 255px;
    }
    `

function Carousel ({data}) {
    
    const picture = data.pictures;

    const [current, setCurrent] = useState(0);

    const length = picture.length;

    const cover = data.cover;

    const nextPicture = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevPicture = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!picture || length <=1 ) {
        return <View src={cover} alt='Photo cover'></View>;
    }

    return (
        <CarouselContainer>
             <CarouselArrow>
                <ImgArrowLeft src={ArrowLeft} onClick={prevPicture} />
                <ImgArrowRight src={ArrowRight} onClick={nextPicture} />
            </CarouselArrow>
                {picture.map((p, index) => {
                    return (
                    <CarouselItem key={index}>
                        {index === current && 
                        <View src={p} alt='Decor1' />}
                       
                    </CarouselItem>
                    );
                })}
          
        </CarouselContainer>
    );
};

export default Carousel;