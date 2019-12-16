import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  body {
    font-family: Roboto;
    background-color: #E5E5E5;  
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
