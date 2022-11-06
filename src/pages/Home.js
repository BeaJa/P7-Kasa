import React from 'react';
import Style from "styled-components";
import Photo1 from "../assets/foret.png"
import Footer from '../components/Footer';
import DatasCards from '../components/DatasCards';


const ContainerHome = Style.div`
    display: flex;
    flex-direction: column;
    `
const ContainerImageText = Style.div`
    margin: 20px 50px;
    `
const Text = Style.p`
    position: relative;
    text-align: center;
    bottom: 160px;
    color: white;
    font-size: 48px;
    font-weight: 500
    `
const Image = Style.img`
    width: 100%;
    border-radius: 20px
    `
const ContainerCards = Style.div`
    display: grid;
    width: 1420px;
    margin: 20px 20px;
    background: #F7F7F7;
    border-radius: 25px;
    padding: 20px
    `
const Home = () => {

 
    return (
        <ContainerHome>
            <ContainerImageText>
                <Image src={Photo1} alt="Foret"></Image>
                    <Text>Chez vous, partout et ailleurs</Text>
            </ContainerImageText>
            <ContainerCards>
                
                  <DatasCards></DatasCards>
                
            </ContainerCards>
            <Footer></Footer>
        </ContainerHome>
    )
};

export default Home;