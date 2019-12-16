/**
 *
 * Link
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.div`
  background-color: #fff;
  display: flex;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  padding: 10px;
  margin-top: 20px;
`;

const VotingContainer = styled.div`
  padding: 15px;
`;
const VotingCount = styled.div`
  font-size: 20px;
  text-align: center;
  padding-bottom: 5px;
  padding-top: 5px;
`;
const VotingIcon = styled.span`
  font-size: 40px;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  font-size: 16px;
`;
const Description = styled.div`
  color: #757575;
`;
const LinkAnchor = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

function Link({ link }) {
  return (
    <StyledLink>
      <VotingContainer>
        <VotingCount>{link.voteCount}</VotingCount>
      </VotingContainer>
      <DetailsContainer>
        <div>
          <LinkAnchor href={link.url}>{link.url}</LinkAnchor>
        </div>
        <Description>{link.description}</Description>
      </DetailsContainer>
    </StyledLink>
  );
}

Link.propTypes = {
  link: PropTypes.shape({
    voteCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Link;
