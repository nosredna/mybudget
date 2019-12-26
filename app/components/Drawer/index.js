/**
 *
 * Drawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Drawer as BPDrawer, Position, Classes } from '@blueprintjs/core';

const Item = styled.div`
  padding: 25px;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: solid 1px #f6f6f6;
  &:hover {
    background-color: #f6f6f6;
  }
`;

function Drawer({
  items,
  selectItem,
  itemLabelAttr,
  itemKeyAttr,
  isDrawerOpen,
  handleClose,
}) {
  const drawerSettings = {
    position: Position.RIGHT,
    canOutsideClickClose: true,
    canEscapeKeyClose: true,
    autoFocus: true,
    enforceFocus: true,
    size: '300px',
  };
  const itemNodes = items.map(item => (
    <Item key={item[itemKeyAttr]} onClick={() => selectItem(item)}>
      {item[itemLabelAttr]}
    </Item>
  ));
  return (
    <BPDrawer isOpen={isDrawerOpen} onClose={handleClose} {...drawerSettings}>
      <div className={Classes.DRAWER_BODY}>{itemNodes}</div>
    </BPDrawer>
  );
}

Drawer.propTypes = {
  items: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  itemLabelAttr: PropTypes.string.isRequired,
  itemKeyAttr: PropTypes.string.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Drawer;
