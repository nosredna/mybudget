/**
 *
 * LinkList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'components/Link';
import IconButton from 'components/IconButton';
import getIcon from 'components/IconButton/getIcon';

const StyledLinkList = styled.div``;

const StyledIconButton = styled(IconButton)`
  box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px,
    rgba(0, 0, 0, 0.227451) 0px 3px 10px;
  border-radius: 50%;
  display: inline-block;
  position: fixed;
  right: 30px;
  top: 110px;
  background-color: #ff4081;
  padding: 25px;
  /* padding-left: 30px;
  padding-right: 30px; */

  &:hover {
    background-color: #f9578e;
  }
`;

const StyledIcon = styled(getIcon('Plus'))`
  color: #fff;
`;

function LinkList({ links, topicName, startAdd }) {
  const linkNodes = links.map(l => <Link key={l.id} link={l} />); // eslint-disable-line jsx-a11y/anchor-is-valid
  return (
    <StyledLinkList>
      <h1>{topicName}</h1>
      {linkNodes}
      <StyledIconButton icon={StyledIcon} onClick={() => startAdd(topicName)} />
    </StyledLinkList>
  );
}

LinkList.propTypes = {
  startAdd: PropTypes.func.isRequired,
  topicName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LinkList;
