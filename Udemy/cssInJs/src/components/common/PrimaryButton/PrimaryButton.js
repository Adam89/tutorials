import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

//styled helper as a function

const PrimaryButton = styled(Button).attrs({
  color: 'primary'
})`
margin: 10px 0px;
&:hover {
color: black !important;
background-color:red !important;
}
`

export default PrimaryButton;