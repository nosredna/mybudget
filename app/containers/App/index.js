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
import NavigationContainer from 'containers/NavigationContainer/Loadable';
import LinkListContainer from 'containers/LinkListContainer/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import styled from 'styled-components';
import GlobalStyle from '../../global-styles';

const StyledApp = styled.div`
  display: block;
  margin: 10px;
`;

export default function App() {
  return (
    <StyledApp>
      <NavigationContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/topics/:topicName" component={LinkListContainer} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </StyledApp>
  );
}
