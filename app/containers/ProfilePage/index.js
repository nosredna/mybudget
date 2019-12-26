/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Profile from 'components/Profile';
import { selectAuthUserProfile } from 'containers/Authentication/selectors';
import { createStructuredSelector } from 'reselect';

const GET_ME = gql`
  query me {
    getMe {
      authId
      email
      emailVerified
      name
      firstName
      lastName
    }
  }
`;

export function ProfilePage({ authProfile }) {
  const { data, loading } = useQuery(GET_ME);

  if (loading) return null;

  return <Profile serverProfile={data} authProfile={authProfile} />;
}

ProfilePage.propTypes = {
  authProfile: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authProfile: selectAuthUserProfile,
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(ProfilePage);
