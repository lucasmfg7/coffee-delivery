import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.base.background};
    color: ${({ theme }) => theme.colors.base.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.base.title};
    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.colors.base.subtitle};
    margin: 0;
  }
`;
