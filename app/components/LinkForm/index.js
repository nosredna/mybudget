/**
 *
 * LinkForm
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from 'components/TextInput';

const StyledLinkForm = styled.div`
  background-color: #fff;
  padding: 10px;
  width: 320px;
  padding: 25px;
  border-radius: 2px;
  position: fixed;
  top: 25%;
  left: 50%;
  margin-left: -160px;
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

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow-x: hidden;
`;

const StyledTextInput = styled(TextInput)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

function LinkForm({ topicName, addLink, addLinkCanceled }) {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  // const [errorText, setErrorText] = useState(null);
  const [urlError, setUrlError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const onAdd = () => {
    let tempUrlError;
    let tempDescriptionError;
    if (
      !url.match(
        /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, // eslint-disable-line no-useless-escape
      )
    ) {
      tempUrlError = 'Please provide a valid URL';
    }

    if (!description) {
      tempDescriptionError = 'Please provide a valid description';
    }

    setUrlError(tempUrlError);
    setDescriptionError(tempDescriptionError);

    if (tempUrlError || tempDescriptionError) {
      return;
    }

    const link = {
      url,
      description,
      topicName,
    };
    addLink(link);
  };
  return (
    <Overlay>
      <StyledLinkForm>
        <Heading>Add a link</Heading>
        <StyledTextInput
          placeholder="URL"
          onInputChange={value => setUrl(value)}
          errorText={urlError}
        />
        <StyledTextInput
          placeholder="Description"
          onInputChange={value => setDescription(value)}
          errorText={descriptionError}
        />
        <ActionContainer>
          <Button onClick={addLinkCanceled}>cancel</Button>
          <Button onClick={onAdd}>add</Button>
        </ActionContainer>
      </StyledLinkForm>
    </Overlay>
  );
}

LinkForm.propTypes = {
  topicName: PropTypes.string.isRequired,
  addLink: PropTypes.func.isRequired,
  addLinkCanceled: PropTypes.func.isRequired,
};

export default LinkForm;
