/**
 *
 * TextInput
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  border-bottom-color: ${props =>
    props.error ? '#ce1313' : 'rgba(0, 0, 0, 0.2)'};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding: 5px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  width: 100%;
  font-size: 18px;

  &:focus {
    outline: none;
    border-bottom-color: #00afcc;
    border-bottom-width: 2px;
  }
`;

const ErrorMessage = styled.div`
  color: #ce1313;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
`;

function TextInput({ errorText, placeholder, onInputChange, className }) {
  const [value, setValue] = useState('');
  const fieldError = errorText ? (
    <ErrorMessage>{errorText}</ErrorMessage>
  ) : null;

  const handleChange = e => {
    setValue(e.target.value);
    if (onInputChange) onInputChange(value);
  };

  return (
    <div>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        type="text"
        error={!!errorText}
        className={className}
      />
      {fieldError}
    </div>
  );
}

TextInput.propTypes = {
  errorText: PropTypes.string,
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func,
  className: PropTypes.string,
};

export default TextInput;
