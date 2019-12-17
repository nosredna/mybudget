/**
 *
 * Login
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validator from 'email-validator';
import TextInput from 'components/TextInput';

const StyledLogin = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  padding: 10px;
  width: 320px;
  padding: 25px;
  border-radius: 2px;
  margin: 100px auto;
`;

const Heading = styled.div`
  font-size: 22px;
  color: #222;
  margin-bottom: 20px;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const Button = styled.div`
  text-transform: uppercase;
  padding: 10px;
  border-radius: 2;
  cursor: pointer;
  color: #00afcc;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    font-weight: 700;
  }
`;

function Login(props) {
  const [email, setEmail] = useState('');
  const [errorText, setErrorText] = useState(null);
  const login = () => {
    if (!validator.validate(email)) {
      setErrorText('Please provide a valid email');
      return;
    }

    setErrorText(null);
    props.login(email);
  };
  return (
    <StyledLogin>
      <Heading>Login with your email</Heading>
      <TextInput
        placeholder="Your email"
        onInputChange={value => setEmail(value)}
        errorText={errorText}
      />
      <ActionContainer>
        <Button onClick={props.cancelLogin}>cancel</Button>
        <Button onClick={login}>log in</Button>
      </ActionContainer>
    </StyledLogin>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  cancelLogin: PropTypes.func.isRequired,
};

export default Login;
