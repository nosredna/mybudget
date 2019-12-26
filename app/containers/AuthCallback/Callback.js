import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Callback = ({ handleAuthentication }) => {
  useEffect(() => {
    handleAuthentication();
  }, []);
  return <h1>Loading...</h1>;
};

Callback.propTypes = {
  handleAuthentication: PropTypes.func.isRequired,
};

export default Callback;
