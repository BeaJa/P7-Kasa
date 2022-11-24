import Style from "styled-components"
import Collapse from '../components/Collapse';
import Datas from '../assets/data/data.json'
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Tags from "../components/Tags";
import { device } from "../components/device";

const ContainerFicheLoc = Style.div`
    min-height: 1440px;
    margin: 20px 100px;

    @media ${device.mobileM} {
        margin: 20px;
    }
    `
const CarouselContentWrapper = Style.div`
    overflow: hidden;
    `
const TitleTagsHostRating = Style.div`
    display: flex;
    justify-content: space-between;

    @media ${device.mobileM} {
        flex-direction: column;
    }
    `
const TitleTags = Style.div`
    display: flex;
    flex-direction: column;
    `
const Title = Style.div`    
    `
const TitleH1 = Style.h1`
    width: auto;
    height: 40px;
    font-size: 36px;

    @media ${device.mobileM} {
        height: auto;
        font-size: 20px;
        }
    `
const TitleP = Style.p`
    font-size: 20px;

    @media ${device.mobileM} {
    font-size: 14px;
    margin-top: 0;
    }
    `
const HostRating = Style.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.mobileM} {
        margin-top: 20px;
        flex-direction: row-reverse;
    }
    `
const Host = Style.div`
    display: flex;
    justify-content: flex-end;
    text-align: end;
    margin: 20px 0;

    @media ${device.mobileM} {
        justify-content: center;
        margin: 0;
    }
    `
const HostH2 = Style.h2`
    width: 80px;
    height: 50px;
    font-size: 18px;
    text-align: right;

    @media ${device.mobileM} {
        width: 45px;
        height: 35px;
        margin: 0 10px;
        font-size: 15px;
    }
    `
const HostCircle = Style.div`
    width: 64px;
    height: 64px;
    background: #C4C4C4;
    border-radius: 50px;
    overflow: hidden;
    margin-left: 15px;
    
    @media ${device.mobileM} {
        width: 32px;
        height: 32px;
    }
    `
const HostImage = Style.img`
    width: 64px;
    height: 64px;

    @media ${device.mobileM} {
        width: 32px;
        height: 32px;
    }
    `
const ContentCollapse = Style.div`
    display: flex;
    justify-content: space-between;
    height: auto;
    margin: 30px 0;

    @media ${device.mobileM} {
        flex-direction: column;
        height: 90px;
        margin: 10px 0;
    }
    `
const Div = Style.div`
    width: 30px
    `
const TextLabel = Style.div`
    font-size: 24px;
    line-height: 142.6%;
    font-weight: 400;
    margin-bottom: 30px;
    padding: 20px;

    @media ${device.mobileM} {
        font-size: 15px;
    }
    ` 
const List = Style.ul`
    margin: 0;
    padding-left: 5px;
    `
const Li = Style.li`
    @media ${device.mobileM} {
        font-size: 15px;
}
`

function FicheLoc() {
    const {id} = useParams();
    const fiches = Datas;
    const fiche = fiches.find(obj => {
        return obj.id === id;
    })
    const equip = fiche.equipments
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
                    <Tags data={fiche}></Tags>
                </TitleTags>
                <HostRating>
                    <Host>
                        <HostH2>{fiche.host.name}</HostH2>
                        <HostCircle>
                            <HostImage src={fiche.host.picture} alt='Propriétaire'/>
                        </HostCircle>
                    </Host>
                    <Rating data={fiche}></Rating>
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
                                        <Li key={index}>{e}</Li>
                                    ))
                                }
                                </List>
                            </TextLabel>
                        </Collapse>               
                    </ContentCollapse>
            </ContainerFicheLoc>
        )}
export default FicheLoc;