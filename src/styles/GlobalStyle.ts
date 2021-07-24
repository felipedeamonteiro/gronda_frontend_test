import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto Slab', sans-serif;
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }
`;