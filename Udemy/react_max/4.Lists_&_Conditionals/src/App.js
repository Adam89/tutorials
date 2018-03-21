import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Adam', age: 28},
      {id: 2, name: 'Kelly', age: 28},
      {id: 3, name: 'Tom', age: 40}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); reference type slice copys array and creates new 1
    const persons = [...this.state.persons]; //copy state never mutate
    persons.splice(personIndex, 1); // splice at index and remove 1 element
    this.setState({persons}) // set state at new person
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(singlePerson => {
      return singlePerson.id === id
    })

    const person = {
      ...this.state.persons[personIndex] // create new object or object.assign({}, this.state.person[personIndex])
    };
    person.name = event.target.value; // new state
    const persons = [...this.state.persons] // map new state into array
    persons[personIndex] = person; // person index should be updated person

    this.setState({persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow // show person is equal what does show is not and merges only that piece of state
    });
  }

  render() { // used when you extend the component object

    const style = { // inline scoped styles
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    };

    let persons = null; // more elegant way of conditional statments

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { // index is parameter on map
            return <Person 
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    click={() => this.deletePersonHandler(index)}
                    changed={(event,) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      )
    }
    return (
      <div className="App">
       <h1>Hi, This is a React App built by Adam</h1>
       <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person
       </button>
       {/* { this.state.showPersons ? <div>
       <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Roo Roo! ')}
          changed={this.nameChangeHandler}>& My Hobbie is making Adam Laugh</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
        </div> : null */}
        {persons}
       
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

// pass refrence to function as props on the component

// you can pass methods to props for any compoent from parent downawards unilateral flow. Childs can change data in the parent.

// this reference state or function and bind reference the class component

// use bind syntax if you can passing arrow functions onclick can be inefficent.