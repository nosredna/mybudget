/**
 *
 * Navigation
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Navigation({ topics, selectTopic }) {
  const topicNodes = topics.map(t => (
    <div key={t.name} onClick={() => selectTopic(t)}>
      {t.name}
    </div>
  ));
  return <div>{topicNodes}</div>;
}

Navigation.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectTopic: PropTypes.func.isRequired,
};

export default memo(Navigation);
