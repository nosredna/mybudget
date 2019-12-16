/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import styled from 'styled-components';
import GlobalStyle from '../../global-styles';

const StyledDiv = styled.div`
  display: block;
  margin: 10px;
`;

export default function App() {
  return (
    <StyledDiv>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </StyledDiv>
  );
}
