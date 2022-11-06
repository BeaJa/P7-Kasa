import React, { useEffect, useState } from "react";
import Style from "styled-components"
import Collapse from '../components/Collapse';
import Locations from "../assets/data/data.json"
import { useParams } from "react-router-dom";

console.log(Locations);

const ContainerFicheLoc = Style.div`
    
    `
// const ContainerPhoto = Style.div`
//     margin: 20px 0 20px;
//     border-radius: 5px
//     `
const TitleHostRating = Style.div`
    display: flex;
    flex-direction: column;
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
    
    const {id} = useParams();
    const [ficheData, setFicheData] = useState({});
    // console.log(ficheData);

    useEffect(() => {
        let data = Locations.find((item) => item.id = id)
        console.log(data);
        setFicheData(data)
    }, [id])

    const { 
        title, cover, pictures, description, host, rating, location, equipements, tags, index }
         = ficheData

        return (
            <ContainerFicheLoc>
               
            
                    <><TitleHostRating>
                        <div>
                            <h1 key={id}>{title}</h1>
                            <p></p>
                        </div>
                        <div>
                            <p>{location}</p>
                        </div>
                        
                    </TitleHostRating>
                    <TagCollapse>
                            <Tag>
                                <RectTag>{tags}</RectTag>
                                <RectTag>{tags}</RectTag>
                                <RectTag>{tags}</RectTag>
                            </Tag>
                            <Content>
                                <ContentCollapse>
                                    <Collapse label="Decription">
                                        <TextLabel key={id}>{description}</TextLabel>
                                    </Collapse>
                                </ContentCollapse>
                                <ContentCollapse>
                                    <Collapse label="Equipements">
                                        <TextLabel key={id}>{equipements}</TextLabel>
                                    </Collapse>
                                </ContentCollapse>
                            </Content>
                        </TagCollapse></>
                
                
            </ContainerFicheLoc>
        
    );
    // } else {

    }
// })}

export default FicheLoc;