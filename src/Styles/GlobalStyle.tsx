import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
    box-sizing: border-box;
    }

    body {
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: background-color .2s;
    padding: 50px 0 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
    color: black;
}

    .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
} 
`