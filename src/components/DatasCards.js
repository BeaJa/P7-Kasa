import React from 'react';
import Locations from "../assets/data/data.json"
import Cards from './Cards';
import Style from "styled-components"

// console.log(Locations[0].id);

const ContainerCards = Style.div`
    display: grid;
    width: 1420px;
    margin: 20px 20px;
    background: #F7F7F7;
    border-radius: 25px;
    padding: 20px
    `
const Flex = Style.div`
    display: flex;
    flex-wrap: wrap;
    `
const DatasCards = () => {
    return (
       
        <ContainerCards>
            <Flex>
                {Locations.map((logement, id) => (
                    <Cards key={id} value={logement.id} locations={logement} />
                ))}
            </Flex>
        </ContainerCards>
     
    );
};

export default DatasCards