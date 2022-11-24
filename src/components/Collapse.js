import React from 'react';
import { useState } from 'react';
import Style from "styled-components";
import Down from '../assets/ArrowDown.svg'
import { device } from './device';

const ContainerButton = Style.div`
    width: 100%;
    margin-bottom: 20px;

    @media ${device.mobileM} {
        margin-bottom: 10px;
    }
    `
const ButtonCollaspe = Style.div`
    display: flex;
    position: relative;
    top: 10px;

    @media ${device.mobileM} {
        width: 100%;
    }
    `
const Button = Style.button`
    display: flex;
    position: relative;
    width: 100%;
    height: 47px;
    border-radius: 10px;
    background-color: #FF6060;
    color: white;
    border-style: none;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media ${device.mobileM} {
        height: 30px;
        font-size: 15px;
    }
    `
const Icon = Style.img.attrs(() => ({}))` ${(props) => props.active && 
    `
    transform: rotate(180deg)`};

    @media ${device.mobileM} {
        width: 15px;
        height: 20px;
    }
    `
const ToggleBackground = Style.div`
    height: auto;
    background-color: #F6F6F6;
    border-radius: 0 0 10px 10px;

    @media ${device.mobileM} {
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
