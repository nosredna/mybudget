/**
 *
 * Drawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DrawerDiv = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-300px')};
  height: 100%;
  width: 300px;
  background: #fff;
  padding: 0px;
  transition: all 0.25s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px, rgba(0, 0, 0, 0.22) 0px 3px 10px;
  z-index: 1000;
`;

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
}) {
  const itemNodes = items.map(item => (
    <Item key={item[itemKeyAttr]} onClick={() => selectItem(item)}>
      {item[itemLabelAttr]}
    </Item>
  ));
  return (
    <DrawerDiv key="one" open={isDrawerOpen}>
      {itemNodes}
    </DrawerDiv>
  );
}

Drawer.propTypes = {
  items: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  itemLabelAttr: PropTypes.string.isRequired,
  itemKeyAttr: PropTypes.string.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default Drawer;
