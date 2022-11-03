import React from 'react';
import Style from "styled-components"
import Photo2 from "../assets/montagne.png"
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

const ContainerApropos = Style.div`
    margin: 20px 50px;
    `
const Background = Style.div`
    margin: 20px 0;
    `
const Image = Style.img`
    width: 100%;
    border-radius: 20px
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
            description: "texte"
        },
        {
            id: "2",
            label: "Respect",
            description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: '3',
            label: "Service",
            description: "texte"
        },
        {
            id: '4',
            label: "Responsabilité",
            description: "texte"
        }
    ]
    return (

        <ContainerApropos>
            <Background>
                <Image src={Photo2} alt="Montagne"></Image>
            </Background>
            <div className='collapseApropos'>
                {
                    tableau.map((item, id) => <Collapse key={id} label={item.label}><LabelText>{item.description}</LabelText>
                    </Collapse>)
                }
            </div>
            <Footer />
        </ContainerApropos>
    );
};

export default Apropos;