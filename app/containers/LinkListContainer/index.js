/**
 *
 * LinkListContainer
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import LinkList from 'components/LinkList';
import { Route } from 'react-router-dom';
import LinkFormContainer from 'containers/LinkFormContainer/Loadable';
import makeSelectLinkListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { requestLinks, startAdd } from './actions';

export function LinkListContainer(props) {
  useInjectReducer({ key: 'linkListContainer', reducer });
  useInjectSaga({ key: 'linkListContainer', saga });
  useEffect(() => {
    props.requestLinks(props.topicName);
  }, [props.topicName]);
  return (
    <>
      <LinkList {...props} />
      <Route
        path="/topics/:topicName/add"
        render={routerProps => (
          <LinkFormContainer {...routerProps} {...props} />
        )}
      />
    </>
  );
}

LinkListContainer.propTypes = {
  requestLinks: PropTypes.func.isRequired,
  topicName: PropTypes.string.isRequired,
};

const mapStateToProps = makeSelectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: topicName => dispatch(requestLinks(topicName)),
    startAdd: topicName => dispatch(startAdd(topicName)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LinkListContainer);
