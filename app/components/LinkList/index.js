/**
 *
 * LinkList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function LinkList({ links }) {
  const linkNodes = links.map(l => (
    <div key={l.id}>
      {l.url} - {l.description}
    </div>
  ));
  return <div>{linkNodes}</div>;
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LinkList;
