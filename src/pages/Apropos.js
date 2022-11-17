import React from 'react';
import Style from "styled-components"
import Photo2 from "../assets/montagne.png"
import Collapse from '../components/Collapse';
import { device } from '../components/device';
import Footer from '../components/Footer';

const ContainerApropos = Style.div`
    min-height: 100%;
    `
const Background = Style.div`
    position: relative;
    margin: 20px 50px;

    @media ${device.tablet} {
    
    }
    `
const Image = Style.img`
    width: 100%;
    border-radius: 20px;

    @media ${device.tablet} {
    
    }
    `
const ContainerCollapse = Style.div`
    height : 850px;
    margin: 30px 80px;

    @media ${device.tablet} {
        height: auto;
    }
    `
const LabelText = Style.p`
    font-size: 24px;
    line-height: 142.6%;
    color: #FF6060;
    font-weight: 400;
    margin: 0;
    padding: 20px
    `

const Apropos = () => {
    const tableau = [
        {
            id: "1",
            label: "Fiabilité",
            description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            id: "2",
            label: "Respect",
            description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: '3',
            label: "Service",
            description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à vous contacter si vous avez la moindre question."
        },
        {
            id: '4',
            label: "Responsabilité",
            description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]
    return (

        <ContainerApropos>
            <Background>
                <Image src={Photo2} alt="Montagne"></Image>
            </Background>
            <ContainerCollapse>
                {
                    tableau.map((item, id) => 
                <Collapse key={id} label={item.label}>
                    <LabelText>{item.description}</LabelText>
                </Collapse>)
                }
            </ContainerCollapse>
            <Footer />
        </ContainerApropos>
    );
};

export default Apropos;