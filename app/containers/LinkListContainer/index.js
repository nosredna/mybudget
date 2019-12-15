/**
 *
 * LinkListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import LinkList from 'components/LinkList';
import { makeSelectLinks } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function LinkListContainer(props) {
  useInjectReducer({ key: 'linkListContainer', reducer });
  useInjectSaga({ key: 'linkListContainer', saga });

  return <LinkList {...props} />;
}

LinkListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  links: makeSelectLinks(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LinkListContainer);
