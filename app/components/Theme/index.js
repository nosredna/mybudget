/**
 *
 * Theme
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  defaultFont:
    'Roboto, Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  colors: {
    black: '#000',
    white: '#fff',
    gray: '#b1b1b1',
    mediumgray: '#757575',
    lightgray: '#dadada',
    verylightgray: '#f0f0f0',
    darkgray: 'rgba(0,0,0,0.16)',
    red: '#e31515',
    green: '#148727',
  },
  // media
  smallScreen: '767px',
  // misc
  border: '1px solid $lightgray',
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
