import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  html,
  body {
    -webkit-overflow-scrolling: touch;
    height: 100%;
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    /* padding: 0 0.8em; */
    font-family: Roboto;
    font-size: 16px;
  }

  @media only screen and (min-width: 48em) {
    body {
      /* padding: 0 3em; */
    }
  }

  :global(#root) {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
