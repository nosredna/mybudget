/**
 *
 * Navigation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '../AppBar';
import Drawer from '../Drawer';

const StyledNavigation = styled.div``;

function Navigation({
  topics,
  selectTopic,
  toggleDrawer,
  closeDrawer,
  isDrawerOpen,
  email,
  requestLogin,
  requestLogout,
  routerPush,
}) {
  return (
    <StyledNavigation>
      <AppBar
        toggleDrawer={toggleDrawer}
        email={email}
        requestLogin={requestLogin}
        requestLogout={requestLogout}
        routerPush={routerPush}
      />
      <Drawer
        items={topics}
        selectItem={selectTopic}
        itemLabelAttr="name"
        itemKeyAttr="name"
        isDrawerOpen={isDrawerOpen}
        handleClose={closeDrawer}
      />
    </StyledNavigation>
  );
}

Navigation.propTypes = {
  email: PropTypes.string,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectTopic: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  requestLogin: PropTypes.func.isRequired,
  requestLogout: PropTypes.func.isRequired,
  routerPush: PropTypes.func.isRequired,
};

export default Navigation;
