import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Adam', age: 28},
      {name: 'Kelly', age: 28},
      {name: 'Tom', age: 40}
    ]
  }

  switchNameHandler = () => {
    //console.log('was clicked');
    this.setState({persons: [
      {name: 'JAUUUA', age: 28},
      {name: 'Kelly', age: 28},
      {name: 'Tom', age: 40}
    ]})
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, This is a React App built by Adam</h1>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>& My Hobbie is making Adam Laugh </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}


export default App;


// class has properties like a variable of a class

// state is managed inside a class based component only. It is a javascript object array or object literal.

// if state changes it re renders / update the dom

// assigned switchNameHandler property to a function passed as reference 

// never mutate state use this.setState it takes an object as an argument looks at new state and old state and only re renders difference this includes props changing too

// functional components don't manipulate the state this is good. try to use them as much as possible