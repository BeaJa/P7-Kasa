// import React, { useEffect, useState } from "react";
import Style from "styled-components"
import Collapse from '../components/Collapse';
import Locations from "../assets/data/data.json"
import { renderMatches } from "react-router-dom";

console.log(Locations.id);

const ContainerFicheLoc = Style.div`
    
    `
// const ContainerPhoto = Style.div`
//     margin: 20px 0 20px;
//     border-radius: 5px
//     `
const Title = Style.div`
    margin: 0 70px
    `
const TagCollapse = Style.div`
    margin: 0 70px
    `
const Tag = Style.div`
    display: flex;
    `
const RectTag = Style.div`
    height: 25px;
    width: 115px;
    border-radius: 10px;
    background: #FF6060;
    margin: 0 20px 20px 0;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    color: white
    `
const Content = Style.div`
    display: flex
    `
const ContentCollapse = Style.div`
    width: 50%;
    height: 52px;
    margin-right: 20px
    `
const TextLabel = Style.p`
    font-size: 24px;
    line-height: 142.6%;
    color: #FF6060;
    font-weight: 400;
    margin: 0;
    padding: 20px
    `
function FicheLoc() {
    // console.log(Locations);

    Locations.map((loc, id, title, location) => {
       
        if(loc.id === title) {

        return (
            <ContainerFicheLoc>
                <Title key={id} value={loc.id}>
                    <h1>{title}</h1>
                    <p>{location}</p>
                </Title>
  
                <TagCollapse>
                    <Tag>
                        <RectTag>Tag1</RectTag>
                        <RectTag>Tag2</RectTag>
                        <RectTag>Tag3</RectTag>
                    </Tag>
                    <Content>
                        <ContentCollapse>
                            <Collapse label="Decription">
                                <TextLabel>Description</TextLabel>
                            </Collapse>
                        </ContentCollapse>
                        <ContentCollapse>
                            <Collapse label="Equipements">
                                <TextLabel></TextLabel>
                            </Collapse>
                        </ContentCollapse>
                    </Content>
                </TagCollapse>
            </ContainerFicheLoc>
        
    );
    } 
    })}

export default FicheLoc;