import { Link } from "react-router-dom"
import Style from "styled-components"
import { createGlobalStyle } from "styled-components"
import { device } from "../components/device"

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 24px;
  }
  
  body {
    max-width: 1940px;
    margin: 0;
    margin: auto;
  }

  li {
    list-style-type: none;
  }
 `
export const StyleLink = Style(Link)`
    display: flex;
    color: #FF6060;
    text-decoration: none;
    width: 100px;
    padding: 20px 10px;
    justify-content: flex-end;

    @media ${device.tablet} {
      font-size: 17px;
      text-transform: uppercase;
    }
    &:hover {
      text-decoration: underline
    }
    `