import React from 'react';
import styled from "styled-components";
import PhotoCouverture from "../assets/foret.png"
import DatasJson from '../assets/data/data.json'
import Cards from '../components/Cards';
import { device } from '../components/device';


const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 100px 20px;

    @media ${device.mobileM} {
        margin: 0 20px;
    }
    `
const ContainerImageText = styled.div`
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
const TextDiv = styled.div`
    position: absolute;
    z-index: 2;
    margin: 0 50px;

    @media ${device.mobileM} {
        margin: 0 25px;
    }
    `
const Text = styled.p`
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
const ImageDiv = styled.div`
    width: 100%;
    height: 223px;

    @media ${device.mobileM} {
        height: 111px;
    }
    `
const Image = styled.img`
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
    
const Home = () => {

    return (
        <ContainerHome>
            <ContainerImageText>
                <ImageDiv>
                    <Image src={PhotoCouverture} alt="Foret"/>
                </ImageDiv>
                <TextDiv>
                    <Text>Chez vous, partout et ailleurs</Text>
                </TextDiv>
            </ContainerImageText>
          
            <Cards data={DatasJson}></Cards>
          
        </ContainerHome>
    )
};
export default Home;