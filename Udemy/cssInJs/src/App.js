import React, { Component } from 'react';
import MyButton from './components/common/button/Button';
import PasswordInput from './components/common/PasswordInput/PasswordInput';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import lightTheme from './theme/light';
import darkTheme from './theme/dark';
import { Button } from 'reactstrap';
import PrimaryButton from './components/common/PrimaryButton/PrimaryButton';
import Spinner from './components/common/Spinner/spinner';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => (props.theme.id === 'light' ? 'Arial' : 'Times New Roman')} !important
  };
`

const AppWrapper = styled.main`
  max-width: 800px;
  margin: 0px auto;
  padding: 16px;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.primaryColor};
  text-align: center;
`;
class App extends Component {

  state = {
    theme: lightTheme,
    showPassword: false
  };

  handleToggleTheme = () => {
    this.setState({
      theme: this.state.theme.id === 'light' ? darkTheme : lightTheme
    })
  };

  handleTogglePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
          <AppWrapper>
              <MyButton onClick={this.handleToggleTheme}>
                light/dark
              </MyButton>
              <PasswordInput showPassword={this.state.showPassword} />
              <MyButton onClick={this.handleTogglePassword}> {this.state.showPassword ? 'hide' : 'Show'} </MyButton>
              <Button color="primary">ReactStrap</Button>
              <PrimaryButton>ModifiedReactButton</PrimaryButton>
              <Spinner/>
              <GlobalStyle />
          </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
