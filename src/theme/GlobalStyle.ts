import { createGlobalStyle } from 'styled-components';
import theme from '@src/theme/theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    display: flex;
    min-height: 100%;
    flex-direction: column;
    background-color: ${theme.colors.neutral.x500}; 
  }
  body {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  a:link{
    text-decoration: none!important;
  }
  #__next {
    width: 100%;
    height: 100%; 
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
   
  }
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
