/**
 *
 * NavigationContainer
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
// import { useInjectReducer } from 'utils/injectReducer';
import Navigation from 'components/Navigation';
// import { select } from 'redux-saga/effects';
import { makeSelecTopics } from './selectors';
// import reducer from './reducer';
import saga from './saga';
import { requestTopics, selectTopic } from './actions';

export function NavigationContainer(props) {
  // useInjectReducer({ key: 'navigationContainer', reducer });
  useInjectSaga({ key: 'navigation', saga });

  useEffect(() => {
    props.requestTopics();
  }, []);

  return <Navigation {...props} />;
}

NavigationContainer.propTypes = {
  requestTopics: PropTypes.func.isRequired,
  selectTopic: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  topics: makeSelecTopics(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: topic => dispatch(selectTopic(topic)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(NavigationContainer);
