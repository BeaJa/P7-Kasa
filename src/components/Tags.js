import React from 'react';
import styled from 'styled-components'
import { device } from './device';

const ContainerTags = styled.div`
    display: flex;
    `
const Tag = styled.div`
    height: 35px;
    width: auto;
    border-radius: 10px;
    background-color: #FF6060;
    margin-right: 20px;
    padding: 0 20px;
    font-size: 20px;
    line-height: 32px;
    color: white;

    @media ${device.mobileM} {
        height: 20px;
        margin-right: 10px;
        padding: 0 10px;
        font-size: 12px;
        border-radius: 5px;
        line-height: 18px;
    }
    `
const Tags = ({data}) => {

    const listTags = data.tags;

    return (
        <ContainerTags>
            {
            listTags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
                ))
            }
        </ContainerTags>
    );
};

export default Tags;