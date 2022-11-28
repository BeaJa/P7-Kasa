import styled from "styled-components"
import Collapse from '../components/Collapse';
import DatasJson from '../assets/data/data.json'
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Tags from "../components/Tags";
import { device } from "../components/device";

const ContainerLogement = styled.div`
    margin: 20px 100px;

    @media ${device.mobileM} {
        margin: 20px 20px;
    }
    `
const CarouselContainer = styled.div`
    overflow: hidden;
    `
const TitleTagsHostRating = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${device.mobileM} {
        flex-direction: column;
    }
    `
const TitleTags = styled.div`
    display: flex;
    flex-direction: column;
    `
const Title = styled.div`    
    `
const TitleH1 = styled.h1`
    font-size: 36px;

    @media ${device.mobileM} {
        font-size: 20px;
        }
    `
const TitleP = styled.p`
    font-size: 20px;

    @media ${device.mobileM} {
    font-size: 14px;
    margin-top: 0;
    }
    `
const HostCircleRating = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.mobileM} {
        margin-top: 20px;
        flex-direction: row-reverse;
    }
    `
const Host = styled.div`
    display: flex;
    justify-content: flex-end;
    text-align: end;
    margin: 20px 0;

    @media ${device.mobileM} {
        justify-content: center;
        margin: 0;
    }
    `
const HostH2 = styled.h2`
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
const HostCircle = styled.div`
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
const HostImage = styled.img`
    width: 64px;
    height: 64px;

    @media ${device.mobileM} {
        width: 32px;
        height: 32px;
    }
    `
const ContentCollapse = styled.div`
    display: flex;
    justify-content: space-between;
    height: auto;
    margin: 30px 0;

    @media ${device.mobileM} {
        flex-direction: column;
        margin: 10px 0;
    }
    `
const Div = styled.div`
    width: 30px
    `
const TextCollapseOpen = styled.div`
    font-size: 24px;
    line-height: 142.6%;
    font-weight: 400;
    padding: 20px;

    @media ${device.mobileM} {
        font-size: 15px;
    }
    ` 
const List = styled.ul`
    margin: 0;
    padding-left: 5px;
    `
const Li = styled.li`
    @media ${device.mobileM} {
        font-size: 15px;
}
`
function Logements() {
    const {id} = useParams();

    const logements = DatasJson;

    const logement = logements.find(obj => {

      if ( ! id) {
        return <redirect to='*' />;
      }
        return obj.id === id;
    })
    const equipements = logement.equipments

        return (
            <ContainerLogement>
                <CarouselContainer>  
                    <Carousel pictures={logement.pictures}></Carousel>
                </CarouselContainer>
                <TitleTagsHostRating>
                    <TitleTags>
                        <Title>
                            <TitleH1>{logement.title}</TitleH1>
                                <TitleP>{logement.location}</TitleP>
                        </Title>
                        <Tags data={logement}></Tags>
                    </TitleTags>
                    <HostCircleRating>
                        <Host>
                            <HostH2>{logement.host.name}</HostH2>
                            <HostCircle>
                                <HostImage src={logement.host.picture} alt='Propriétaire'/>
                            </HostCircle>
                        </Host>
                        <Rating data={logement}></Rating>
                    </HostCircleRating>
                </TitleTagsHostRating>
                <ContentCollapse>
                    <Collapse label="Decription">
                        <TextCollapseOpen>{logement.description}</TextCollapseOpen>
                    </Collapse>
                    <Div></Div>
                    <Collapse label="Equipements">
                        <TextCollapseOpen>
                            <List>
                                {
                                equipements.map((equipement, index) => (
                                    <Li key={index}>{equipement}</Li>
                                    ))
                                }
                            </List>
                        </TextCollapseOpen>
                    </Collapse>               
                </ContentCollapse>
            </ContainerLogement>
        )}
export default Logements;