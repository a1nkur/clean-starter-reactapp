import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* CSS RESET */
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        font-family: 'Poppins', sans-serif;
    }
    a {
        text-decoration: none;
        color: #000;
    }
`;
