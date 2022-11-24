import React from 'react';
import Style from "styled-components"
import Photo from '../assets/montagne.png';
import Collapse from '../components/Collapse';
import { device } from '../components/device';
import Footer from '../components/Footer';
import Photo1 from '../assets/montagne2.png'

const ContainerApropos = Style.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0 100px;

    @media ${device.mobileM} {
        margin: 10px 0;
    }
    `
const Container = Style.div`
    display: flex;
    position: relative;
    height: 223px;
    margin: 20px 0;

    @media ${device.mobileM} {
        margin: 0 20px 20px;
    }
    `
const Image = Style.img`
    width: 100%;
    height: 223px;
    border-radius: 20px;
    background-size: contain;

    @media ${device.mobileM} {
      content: url(${Photo1})
    }
    `
const ContainerCollapse = Style.div`
    margin: 10px 80px;

    @media ${device.mobileM} {
        margin: 0 20px;
    }
    `
const LabelText = Style.p`
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    margin: 0;
    padding: 20px;

    @media ${device.mobileM} {
        font-size: 12px;
        line-height: 20px;
    }
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
        <>
        <ContainerApropos>
            <Container>
                <Image src={Photo} alt="montagne" ></Image>
            </Container>
            <ContainerCollapse>
                {
                    tableau.map((item, id) => 
                <Collapse key={id} label={item.label}>
                    <LabelText>{item.description}</LabelText>
                </Collapse>)
                }
            </ContainerCollapse>
        </ContainerApropos>
        <Footer></Footer>
        </>
    );
};
export default Apropos;