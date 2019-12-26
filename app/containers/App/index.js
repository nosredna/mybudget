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
import styled from 'styled-components';

import NavigationContainer from 'containers/NavigationContainer/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ErrorBoundary from 'components/ErrorBoundary';
import Theme from 'components/Theme';
import AppError from 'components/AppError/Loadable';
import AuthCallback from 'containers/AuthCallback/Loadable';
import ProfilePage from 'containers/ProfilePage';
import HomePage from 'containers/HomePage';
import ApiProvider from 'containers/ApiProvider';
import Authentication from 'containers/Authentication';
import PrivateRoute from 'containers/PrivateRoute';
import GlobalStyle from '../../global-styles';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';

const MainContainer = styled.div`
  margin: 0 20px;
`;

export default function App() {
  return (
    <ErrorBoundary fallbackComponent={AppError}>
      <Authentication />
      <Theme>
        <ApiProvider>
          <NavigationContainer />
          <MainContainer>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/callback" component={AuthCallback} />
              <PrivateRoute path="/user/profile" component={ProfilePage} />
              <Route component={NotFoundPage} />
            </Switch>
            <GlobalStyle />
          </MainContainer>
        </ApiProvider>
      </Theme>
    </ErrorBoundary>
  );
}
