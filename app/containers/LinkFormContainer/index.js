/**
 *
 * LinkFormContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import LinkForm from 'components/LinkForm';
import makeSelectLinkFormContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { requestAddLink, cancelAddLink } from './actions';

export function LinkFormContainer(props) {
  useInjectReducer({ key: 'linkFormContainer', reducer });
  useInjectSaga({ key: 'linkFormContainer', saga });

  return <LinkForm {...props} />;
}

LinkFormContainer.propTypes = {
  requestAddLink: PropTypes.func.isRequired,
  cancelAddLink: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  linkFormContainer: makeSelectLinkFormContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestAddLink: link => dispatch(requestAddLink(link)),
    cancelAddLink: () => dispatch(cancelAddLink()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LinkFormContainer);
