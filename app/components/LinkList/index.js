/**
 *
 * LinkList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'components/Link';

const StyledLinkList = styled.div``;

function LinkList({ links, topicName }) {
  const linkNodes = links.map(l => <Link key={l.id} link={l} />);
  return (
    <StyledLinkList>
      <h1>{topicName}</h1>
      {linkNodes}
    </StyledLinkList>
  );
}

LinkList.propTypes = {
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
