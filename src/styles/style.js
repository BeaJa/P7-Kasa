import { NavLink } from "react-router-dom"
import styled from "styled-components"
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

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    font-size: 34px;

    @media ${device.mobileM} {
      font-size: 12px;
    }
  }
 `
export const StyledLink = styled(NavLink)`
    &:active {
    text-decoration: underline;
  }
  
    @media ${device.mobileM} {
      padding: 20px 5px;
      text-transform: uppercase;
    }
    `