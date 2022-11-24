import { Link } from "react-router-dom"
import Style from "styled-components"
import { createGlobalStyle } from "styled-components"
import { device } from "../components/device"

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #FF6060;
  }
  
  body {
    max-width: 1440px;
    margin: 0;
    margin: auto;
  }

  li {
    list-style-type: none;
  }
 `
export const StyleLink = Style(Link)`
    display: flex;
    text-decoration: none;
    width: 100px;
    padding: 20px 10px;
    justify-content: flex-end;
    &:hover {
      text-decoration: underline;
    }
    @media ${device.mobileM} {
      font-size: 12px;
      padding: 20px 5px;
      text-transform: uppercase;
    }
    `