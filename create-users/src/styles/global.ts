import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --text: #633939;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: #F0F2F5;
    }

    body, input, textarea, button {
    font-family: sans-serif;
    font-weight: 400;
    color: var(--text);
  }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    li {
        list-style: none;
    }
`;