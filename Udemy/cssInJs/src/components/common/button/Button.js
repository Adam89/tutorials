import styled, {css} from 'styled-components';

// styled helper that renders an element

// it renders children

//acess to props within the backticks interpolate func

//tagged template literals func call button calling it with back ticks allows you to identify interporlated properties inside them we get acess to prop

// injects at head tag at run time

const MyButton = styled.button`
  background: ${props => props.theme.backgroundColor};
  border: 5px solid ${props => props.theme.primaryColor};
  font-size: 20px;
  display: block;
  margin: 15px auto;
  color:${props => props.theme.primaryColor};
  ${props => props.primary && css`
    background: red;
  `}
`

export default MyButton;