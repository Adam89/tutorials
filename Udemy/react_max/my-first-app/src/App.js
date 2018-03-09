import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, This is a React App built by Adam</h1>
       <Person name="Adam" age="28"/>
        <Person name="Kelly" age="28"/>
        <Person name="Tom" age="40"/>
      </div>
    );
  }
}


export default App;
