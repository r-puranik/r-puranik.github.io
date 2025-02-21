import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', sans-serif;
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    transition: 0.3s ease;
  }

  ::selection {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.body};
  }
`;