import React from 'react';
import Style from "styled-components"
import DatasLoc from "../assets/data/data.json"
import FicheLoc from '../pages/Ficheloc';

console.log(DatasLoc);
const ContainerFicheLoc = Style.div`
    
    `
const Flex = Style.div`
    display: flex;
    flex-wrap: wrap;
    `

const DatasFiche = () => {
    return (
        <ContainerFicheLoc>
              <Flex>
                {DatasLoc.map((logement, id) => (
                   <FicheLoc key={id} locations={logement}></FicheLoc> 
                ))}
            </Flex>
        </ContainerFicheLoc>
    );
};
export default DatasFiche;