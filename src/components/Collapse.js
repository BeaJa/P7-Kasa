import React from 'react';
import { useState } from 'react';
import Style from "styled-components";
import Down from '../assets/VectorDown.svg'
// import Up from '../assets/VectorUp.svg'
import { device } from './device';

const ContainerButton = Style.div`
    width: 100%;
    margin-bottom: 20px;
    `
const ButtonCollaspe = Style.div`
    display: flex;

    @media ${device.tablet} {
        width: 100%;
    }
    `
const Button = Style.button`
    display: flex;
    width: 100%;
    height: 47px;
    border-radius: 5px;
    background: #FF6060;
    text-align: left;
    color: white;
    border-style: none;
    padding: 10px 20px;
    justify-content: space-between;
    `
const Icon = Style.img.attrs(() => ({}))` 
    ${(props) => props.active && 
    `
    transform: rotate(180deg)`}
    `
const ToggleBackground = Style.div`
    height: auto;
    left: 10px;
    top: 38px;
    background-color: #F6F6F6;
    border-radius: 5px;
    color: #FF6060;

    @media ${device.tablet} {
        margin-bottom: 2px;
        width: 100%;
    }
    `
const Collapse = (props) => {
    const [setActive, setActiveOpen] = useState(false);
  
    const Toggle = () => {
        setActiveOpen( !setActive );
    }
    
    return (
        <ContainerButton>
            <ButtonCollaspe>
                <Button onClick={Toggle}>{props.label}
                    <Icon src={Down} active={setActive} alt='arrow icon' />
                </Button>
            </ButtonCollaspe>
            {setActive && 
            <ToggleBackground>{props.children}</ToggleBackground>
            }
        </ContainerButton>
    );
};

export default Collapse;
