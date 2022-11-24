import React from 'react';
import Style from "styled-components";
import Photo1 from "../assets/foret.png"
import Datas from '../assets/data/data.json'
import Cards from '../components/Cards';
import { device } from '../components/device';


const ContainerHome = Style.div`
    display: flex;
    flex-direction: column;
    margin: 0 100px 20px;

    @media ${device.mobileM} {
        margin: 0 20px 20px;
    }
    `
const ContainerImageText = Style.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 223px;
    margin: 20px 0 50px;

    @media ${device.mobileM} {
        height: 111px;
        margin: 20px 0;
    }
    `
const TextDiv = Style.div`
    position: absolute;
    z-index: 2;
    margin: 0 50px;

    @media ${device.mobileM} {
        margin: 0 25px;
    }
    `
const Text = Style.p`
    color: white;
    font-weight: 500;
    font-size: 50px;
    padding: 0 15px;
    word-wrap: break-word;

    @media ${device.mobileM} {
        font-size: 24px;
        padding: 0 15px;
      }
    `
const ImageDiv = Style.div`
    width: 100%;
    height: 223px;

    @media ${device.mobileM} {
        height: 111px;
    }
    `
const Image = Style.img`
    width: 100%;
    height: 223px;
    overflow: hidden;
    opacity: 0.99;
    border-radius: 20px;
    filter: brightness(70%);

    @media ${device.mobileM} {
        height: 111px;
    }
    `
const ContainerCards = Style.div`
    `
    
const Home = () => {

    return (
        <ContainerHome>
            <ContainerImageText>
                <ImageDiv>
                    <Image src={Photo1} alt="Foret"/>
                </ImageDiv>
                <TextDiv>
                    <Text>Chez vous, partout et ailleurs</Text>
                </TextDiv>
            </ContainerImageText>
            <ContainerCards>
                <Cards data={Datas}></Cards>
            </ContainerCards>
        </ContainerHome>
    )
};
export default Home;