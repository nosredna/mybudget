/**
 *
 * NavigationContainer
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import Navigation from 'components/Navigation';
import makeSelectNavigationContainer from './selectors';
import saga from './saga';
import { requestTopics, selectTopic, toggleDrawer } from './actions';

export function NavigationContainer(props) {
  useInjectSaga({ key: 'navigation', saga });

  useEffect(() => {
    props.requestTopics();
  }, []);

  return <Navigation {...props} />;
}

NavigationContainer.propTypes = {
  requestTopics: PropTypes.func.isRequired,
  selectTopic: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   topics: makeSelecTopics(),
//   isDrawerOpen: makeSelectDrawer(),
// });

const mapStateToProps = makeSelectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: topic => dispatch(selectTopic(topic)),
    toggleDrawer: () => dispatch(toggleDrawer()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(NavigationContainer);
