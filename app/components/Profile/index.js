/**
 *
 * Profile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledProfile = styled.div``;

function Profile({ authProfile, serverProfile }) {
  return (
    <StyledProfile>
      <h1>Profile</h1>
      <p>{authProfile.nickname}</p>
      <img
        style={{ maxWidth: 50, maxHeight: 50 }}
        src={authProfile.picture}
        alt="profile pic"
      />
      <pre>{JSON.stringify(authProfile, null, 2)}</pre>
      <pre>{JSON.stringify(serverProfile, null, 2)}</pre>
    </StyledProfile>
  );
}

Profile.propTypes = {
  authProfile: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  serverProfile: PropTypes.object.isRequired,
};

export default Profile;
