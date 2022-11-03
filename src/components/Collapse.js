import React from 'react';
import { useState } from 'react';
import Style from "styled-components"

const ContainerButton = Style.div`
    
    `
const ButtonCollaspe = Style.button`
    display: flex;
    width: 100%;
    height: 47px;
    border-radius: 5px;
    background: #FF6060;
    text-align: left;
    color: white;
    border-style: none;
    margin-top: 20px;
    padding-top: 10px
    `
const ToggleBackground = Style.div`
    height: auto;
    left: 0px;
    top: 38px;
    background-color: #F6F6F6;
    border-radius: 5px
    color: #FF6060;
    `
const Collapse = (props) => {
    const [setActive, setActiveOpen] = useState(false);

    const Toggle = () => {
        setActiveOpen( !setActive );
    }
    return (
        <ContainerButton>
            <ButtonCollaspe onClick={Toggle}>{props.label}</ButtonCollaspe>
            {setActive && 
            <ToggleBackground>{props.children}</ToggleBackground>
            }
        </ContainerButton>
    );
};

export default Collapse;