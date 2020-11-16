import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  html,body {
  height: 100vh;
  width: 100vw;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  }
  
  body {
    background: ${props => props.theme.background};
    font-size: 1.6rem;
  }
  
  a {
    text-decoration: none;
  }
`;
