/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

export default function HomePage({ children }) {
  return <>{children}</>;
}

HomePage.propTypes = {
  children: PropTypes.element,
};
