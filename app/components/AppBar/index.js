/**
 *
 * AppBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

function AppBar({ toggleDrawer }) {
  const AppBarDiv = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #00afcc;
    color: #fff;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
  `;

  const IconButton = styled.div`
    cursor: pointer;
    margin-right: 15px;
  `;
  const BarsIcon = styled(FontAwesome)`
    font-size: 20px;
    color: #fff;
    &:hover {
      color: #e5e5e5;
    }
  `;
  const Heading = styled.div`
    text-align: left;
    display: flex;
    flex-grow: 2;
  `;
  const LinkContainer = styled.div`
    font-size: 16px;
  `;

  return (
    <AppBarDiv>
      <IconButton onClick={toggleDrawer}>
        <BarsIcon name="bars" />
      </IconButton>
      <Heading>Coder Daily</Heading>
      <LinkContainer>Log in</LinkContainer>
    </AppBarDiv>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppBar;
