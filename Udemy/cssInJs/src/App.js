import React, { Component } from 'react';
import MyButton from './components/common/button/Button';
import PasswordInput from './components/common/PasswordInput/PasswordInput';
import { ThemeProvider } from 'styled-components';
import lightTheme from './theme/light';
import darkTheme from './theme/dark';
import { Button } from 'reactstrap';
import PrimaryButton from './components/common/PrimaryButton/PrimaryButton';
import './App.css';

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
      <div className="App">
        <ThemeProvider theme={this.state.theme}>
          <section>
            <MyButton onClick={this.handleToggleTheme}>
              light/dark
            </MyButton>
            <PasswordInput showPassword={this.state.showPassword} />
            <MyButton onClick={this.handleTogglePassword}> {this.state.showPassword ? 'hide' : 'Show'} </MyButton>
            <section>
              <Button color="primary">ReactStrap</Button>

            </section>
            <PrimaryButton>ModifiedReactButton</PrimaryButton>
          </section>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
