import Style from "styled-components"
import Collapse from '../components/Collapse';
import Datas from '../assets/data/data.json'
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import { device } from "../components/device";

const ContainerFicheLoc = Style.div`
    min-height: 1440px;
    `
const CarouselContentWrapper = Style.div`
    overflow: hidden;
    margin: 20px 50px;
    `
const TitleTagsHostRating = Style.div`
    display: flex;
    margin: 20px 50px;
    justify-content: space-between;

    @media ${device.tablet} {
        flex-direction: column;
    }
    `
const TitleTags = Style.div`
    display: flex;
    color: #FF6060;
    flex-direction: column;
    `
const Title = Style.div`    
    `
const TitleH1 = Style.h1`
    font-size: 36px;

    @media ${device.tablet} {
        font-size: 24px;
        }
    `
const TitleP = Style.p`
    @media ${device.tablet} {
    font-size: 20px;
    }
    `
const Tags = Style.div`
    display: flex;
    `
const Tag = Style.div`
    height: 35px;
    width: auto;
    border-radius: 15px;
    background: #FF6060;
    margin-right: 20px;
    padding: 0 20px;
    font-size: 20px;
    line-height: 32px;
    color: white;

    @media ${device.tablet} {
        font-size: 17px;
    }
    `
const HostRating = Style.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.tablet} {
        margin-top: 50px;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
    `
const Host = Style.div`
    display: flex;
    margin-top: 15px;

    @media ${device.tablet} {
        margin: 0;
    }
    `
const HostH2 = Style.h2`
    color: #FF6060;

    @media ${device.tablet} {
        margin: 0 15px;
        padding-top; 10px;
        font-size: 15px;
        text-align: right;
    }
    `
const HostCircle = Style.div`
    width: 64px;
    height: 64px;
    background: #C4C4C4;
    border-radius: 50px;
    margin: 0 20px;
    overflow: hidden;
    
    @media ${device.tablet} {
        width: 50px;
        height: 50px;
        border-radius: 60px;
        margin: 0;
    }
    `
const HostImage = Style.img`
    width: 64px;
    height: 64px;
    `
const ContentCollapse = Style.div`
    display: flex;
    justify-content: space-between;
    height: auto;
    margin: 30px 50px;

    @media ${device.tablet} {
        flex-direction: column;
        margin: 15px 50px;
        height: 120px;
    }
    `
const Div = Style.div`
    width: 30px
    `
const TextLabel = Style.div`
    font-size: 24px;
    line-height: 142.6%;
    color: #FF6060;
    font-weight: 400;
    margin-bottom: 30px;
    padding: 20px
    ` 
const List = Style.ul`
    margin: 0;
    padding: 10px
    `

function FicheLoc() {

    const {id} = useParams();
    // console.log(id);

    const fiches = Datas;
    // console.log(fiches);

    const fiche = fiches.find(obj => {
        return obj.id === id;
    })
    // console.log(fiche);

    const equip = fiche.equipments
    // console.log(equip);
    
    const listTags = fiche.tags
    // console.log(listTags);

    // const stars = fiche.rating
    // console.log(stars);

        return (
            <ContainerFicheLoc>
                <CarouselContentWrapper>  
                    <Carousel data={fiche}></Carousel>
                </CarouselContentWrapper>
                <TitleTagsHostRating>
                <TitleTags>
                    <Title>
                        <TitleH1>{fiche.title}</TitleH1>
                            <TitleP>{fiche.location}</TitleP>
                    </Title>
                    <Tags >
                        {
                            listTags.map((t, index) => (
                        <Tag key={index}>{t}</Tag>
                            ))
                        }
                    </Tags>
                </TitleTags>
                <HostRating>
                    <Host>
                        <HostH2>{fiche.host.name}</HostH2>
                        <HostCircle>
                            <HostImage src={fiche.host.picture} alt='Propriétaire'/>
                        </HostCircle>
                    </Host>
                    <Rating data={fiche}>
                    </Rating>
                </HostRating>
                </TitleTagsHostRating>
                    <ContentCollapse>
                        <Collapse label="Decription">
                            <TextLabel>{fiche.description}</TextLabel>
                        </Collapse>
                        <Div></Div>
                        <Collapse label="Equipements">
                            <TextLabel>
                                <List>
                                {
                                equip.map((e, index) => (
                                        <li key={index}>{e}</li>
                                    ))
                                }
                                </List>
                            </TextLabel>
                        </Collapse>               
                    </ContentCollapse>
            </ContainerFicheLoc>
        )
    }
export default FicheLoc;
