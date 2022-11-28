import React from 'react';
import style from "styled-components"
import PhotoCouverture1 from '../assets/montagne.png';
import Collapse from '../components/Collapse';
import { device } from '../components/device';
import PhotoCouverture2 from '../assets/montagne2.png'

const ContainerApropos = style.div`
    display: flex;
    flex-direction: column;
    margin: 0 100px;

    @media ${device.mobileM} {
        margin: 10px 0;
    }
    `
const ContainerImage = style.div`
    display: flex;
    height: 223px;
    margin: 20px 0;

    @media ${device.mobileM} {
        margin: 0 20px 20px;
    }
    `
const Image = style.img`
    width: 100%;
    height: 223px;
    border-radius: 20px;

    @media ${device.mobileM} {
      content: url(${PhotoCouverture2})
    }
    `
const ContainerCollapse = style.div`
    margin: 10px 80px;

    @media ${device.mobileM} {
        margin: 0 20px;
    }
    `
const DescriptionText = style.p`
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
    const dataCollapse = [
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
            <ContainerImage>
                <Image src={PhotoCouverture1} alt="montagne" ></Image>
            </ContainerImage>
            <ContainerCollapse>
                {
                dataCollapse.map((item, id) => 
                    <Collapse key={id} label={item.label}>
                        <DescriptionText>{item.description}</DescriptionText>
                    </Collapse>)
                }
            </ContainerCollapse>
        </ContainerApropos>
    );
};
export default Apropos;