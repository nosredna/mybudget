/**
 *
 * IconButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIconButton = styled.div`
  cursor: pointer;
  text-align: center;
`;

function IconButton({ icon, onClick, className }) {
  const IconElement = icon;
  return (
    <StyledIconButton onClick={onClick} className={className}>
      <IconElement size={20} />
    </StyledIconButton>
  );
}

IconButton.propTypes = {
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default IconButton;
