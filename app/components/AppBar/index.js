/**
 *
 * AppBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Navbar,
  Button,
  Alignment,
  Popover,
  Menu,
  Position,
} from '@blueprintjs/core';

const StyledAppBar = styled.div``;

function AppBar({
  toggleDrawer,
  email,
  requestLogin,
  requestLogout,
  routerPush,
}) {
  const goto = path => {
    routerPush(path);
  };
  const userMenu = email ? (
    <Menu>
      <li className="bp3-menu-header">
        <h6 className="bp3-heading">{email}</h6>
      </li>
      <Menu.Item
        text="Profile"
        icon="profile"
        onClick={() => goto('/user/profile')}
      />
      <Menu.Item text="Settings" icon="cog" />
      <Menu.Item text="Logout" icon="power" onClick={() => requestLogout()} />
    </Menu>
  ) : (
    <Menu>
      <Menu.Item
        text="Profile"
        icon="profile"
        onClick={() => goto('/user/profile')}
      />
      <Menu.Item text="Login" icon="power" onClick={() => requestLogin()} />
    </Menu>
  );

  return (
    <StyledAppBar>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            <Button
              className="bp3-minimal"
              onClick={() => goto('/')}
              text="Budget"
            />
          </Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Popover content={userMenu} position={Position.BOTTOM}>
            <Button className="bp3-minimal" icon="user" />
          </Popover>
          <Button className="bp3-minimal" icon="notifications" />
          <Button className="bp3-minimal" icon="menu" onClick={toggleDrawer} />
        </Navbar.Group>
      </Navbar>
    </StyledAppBar>
  );
}

AppBar.propTypes = {
  email: PropTypes.string,
  toggleDrawer: PropTypes.func.isRequired,
  requestLogin: PropTypes.func.isRequired,
  requestLogout: PropTypes.func.isRequired,
  routerPush: PropTypes.func.isRequired,
};

export default AppBar;
