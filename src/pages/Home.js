import React from 'react';
import Style from "styled-components";
import Photo1 from "../assets/foret.png"
import Footer from '../components/Footer';
import Datas from '../assets/data/data.json'
import Cards from '../components/Cards';
import { device } from '../components/device';


const ContainerHome = Style.div`
    display: flex;
    flex-direction: column;
    `
const ContainerImageText = Style.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    max-height: 250px;
    padding: 0 50px;
    margin: 20px 0px;
    `
const TextDiv = Style.div`
    position: absolute;
    z-index: 2;
    margin: 0 50px;
    `
const Text = Style.p`
    color: white;
    font-weight: 500;
    font-size: 50px;
    padding: 0 15px;
    word-wrap: break-word;

    @media ${device.tablet} {
        font-size: 30px;
        padding: 0 15px;
      }
    `
const ImageDiv = Style.div`
    width: 100%;
    `
const Image = Style.img`
    width: 100%;
    overflow: hidden;
    opacity: 0.99;
    border-radius: 20px;
    filter: brightness(70%)
    `
const ContainerCards = Style.div`
    padding: 0 50px
    `
const Flex = Style.div`
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
                <Flex>
                    <Cards data={Datas}></Cards>
                </Flex>
            </ContainerCards>
            
            <Footer></Footer>
        </ContainerHome>
    )
};

export default Home;