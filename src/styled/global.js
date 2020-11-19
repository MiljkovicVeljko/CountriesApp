import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

::-webkit-scrollbar {
    display: none;
}

body {	
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
}
`;