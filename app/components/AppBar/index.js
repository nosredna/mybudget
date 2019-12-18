/**
 *
 * AppBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconButton from 'components/IconButton';
import getIcon from 'components/IconButton/getIcon';

const AppBarDiv = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #00afcc;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
`;

const StyledIconButton = styled(IconButton)`
  margin-right: 15px;
`;
const StyledIcon = styled(getIcon('Bars'))`
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
  margin-top: 6px;
`;

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || <Link to="/login">Log in</Link>;

  return (
    <AppBarDiv>
      <StyledIconButton icon={StyledIcon} onClick={toggleDrawer} />
      <Heading>Coder Daily</Heading>
      <LinkContainer>{loginLink}</LinkContainer>
    </AppBarDiv>
  );
}

AppBar.propTypes = {
  email: PropTypes.string,
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppBar;
