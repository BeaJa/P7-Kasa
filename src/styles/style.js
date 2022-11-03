import { Link } from "react-router-dom"
import Style from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 24px;
  }
  
  body {
    margin: 0;
  }

  li {
    list-style-type: none;
  }
 `
export const StyleLink = Style(Link)`
    display: flex;
    color: #FF6060;
    text-decoration: none;
    width: 150px;
    padding: 20px;
    &:hover {
      text-decoration: underline
    }
    `