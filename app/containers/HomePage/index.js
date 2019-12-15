/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import NavigationContainer from 'containers/NavigationContainer';
import LinkListContainer from 'containers/LinkListContainer/Loadable';

export default function HomePage() {
  return (
    <>
      <NavigationContainer />
      <LinkListContainer />
    </>
  );
}
