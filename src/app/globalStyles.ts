import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`    
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        width: 100dvw;
        height: 100dvh;
        overflow: hidden;
        font-family: "Raleway", serif;
        font-style: normal;
    }

    #root {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`;
