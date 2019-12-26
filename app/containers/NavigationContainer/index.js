/**
 *
 * NavigationContainer
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'connected-react-router';

import { useInjectSaga } from 'utils/injectSaga';
import Navigation from 'components/Navigation';
import { requestLogin, requestLogout } from 'containers/Authentication/actions';
import makeSelectNavigationContainer from './selectors';
import saga from './saga';
import {
  requestTopics,
  selectTopic,
  toggleDrawer,
  closeDrawer,
} from './actions';

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
  closeDrawer: PropTypes.func.isRequired,
  requestLogin: PropTypes.func.isRequired,
  requestLogout: PropTypes.func.isRequired,
  routerPush: PropTypes.func.isRequired,
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
    closeDrawer: () => dispatch(closeDrawer()),
    requestLogin: () => dispatch(requestLogin()),
    requestLogout: () => dispatch(requestLogout()),
    routerPush: path => dispatch(push(path)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(NavigationContainer);
