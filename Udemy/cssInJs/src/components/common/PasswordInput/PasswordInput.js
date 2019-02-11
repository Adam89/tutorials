import React from 'react';
import styled from 'styled-components';

// attrs object contain attributes
const PasswordInput = styled.input.attrs({
  type: props => props.showPassword ? 'text' : 'password',
  name: 'adamInput'
})`
  border-radius: 1px;
  outline: none;
  border: 1px solid;
  border-color: black;
  &:focus {
    border-color:blue
  }
`


export default PasswordInput;