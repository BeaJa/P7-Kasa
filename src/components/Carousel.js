import React, { useState } from 'react';
import Style from 'styled-components';
import ArrowLeft from '../assets/ArrowLeft.svg'
import ArrowRight from '../assets/ArrowRight.svg'

const CarouselContainer = Style.div`
    position: relative;
    display: inline-block;
    width: 100%;
    justify-content: center;
    `
const CarouselWrapperButton = Style.div`
    display: flex;
    position: absolute;
    width: 98%;
    padding: 10px;
    align-items: center;
    height: 500px;
    justify-content: space-between;
    `
const ImgArrowLeft = Style.img`
    top: 50%;
    font-size: 2rem;
    `
const ImgArrowRight = Style.img`
    top: 50%;
    font-size: 2rem;
    `
const CarouselWrapperItem = Style.div`
    width: 100%;
    `
const CarouselItem = Style.div`
    align-items: center;
    `
const View = Style.img`
    display: inline-block;
    width: 100%;
    height: 500px;
    object-fit: cover;
    `

function Carousel ({data}) {
    // console.log(data.id);
    const picture = data.pictures;
    // console.log(picture);

    const [current, setCurrent] = useState(0);
    const length = picture.length;

    const nextPicture = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevPicture = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <CarouselContainer>
            <CarouselWrapperButton>
                <ImgArrowLeft src={ArrowLeft} onClick={prevPicture} />
                <ImgArrowRight src={ArrowRight} onClick={nextPicture} />
            </CarouselWrapperButton>
            <CarouselWrapperItem>
                {picture.map((p, index) => {
                    return (
                    <CarouselItem key={index}>
                        {index === current && 
                        <View src={p} alt='Decor1' />}
                    </CarouselItem>
                    );
                })}
            </CarouselWrapperItem>
        </CarouselContainer>
    );
};

export default Carousel;