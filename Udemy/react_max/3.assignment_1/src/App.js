import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'superAdam'
  }

  userNameChangeHandler = (event) => {
    this.setState ({
      username: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <UserInput changed={this.userNameChangeHandler}
        currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Holly" />
        <UserOutput userName="Kelly" />
      </div>
    );
  }
}

export default App;
