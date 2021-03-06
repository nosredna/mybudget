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

export default Input;
