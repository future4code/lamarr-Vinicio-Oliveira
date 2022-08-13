import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    header {
        font-family: 'Baloo Tamma 2', cursive;
    }

    body {
        background-color: lightgrey;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`