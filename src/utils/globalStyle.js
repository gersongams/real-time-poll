import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#EE7F00",
    black: "#0F0A0A",
    white: "#FFFFFF"
  }
};

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  html {
      font-size: 62.5%;

      @media only screen and (max-width: 75em) {
        font-size: 56.25%;
      }

      @media only screen and (max-width: 56.25em) {
        font-size: 50%;
      }

      @media only screen and (min-width: 112.5em) {
        font-size: 75%;
      }
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-weight: 400;
    line-height: 1.7;
    font-family: 'Open Sans', sans-serif !important;
  }

  ::-webkit-scrollbar {
      width: 6px;
  }
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  ::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
`;

export { GlobalStyle, theme };
