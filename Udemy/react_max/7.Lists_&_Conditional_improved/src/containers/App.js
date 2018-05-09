import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
    constructor(props) { // only constructor gets props
      super(props);
      console.log('app.js_inside_constructor_1', props);

      // you can initaliase state inside constructor using this.state = {persons: []}
    }

    componentWillMount() {
      console.log('App_js_inside_componentWillMount_2')
    }
    componentDidMount() {
      console.log('app_js_inside_componentDidMount_4')
    }
  //   shouldComponentUpdate(nextProps, nextState) { // RETURNS TRUE OR FALSE TRUE RUNS CODE FALSE DOES NOT
  //   console.log('[Update App.js] inside componet shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons; // only checks against new object as we slice state
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] inside componet componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate() { // ONLY THIS PROPS THIS STATE B=
    console.log('[Update App.js] inside componet componentDidUpdate')
  }
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
    console.log('app_js_insideRender_3')


    let persons = null; // more elegant way of conditional statments
    if (this.state.showPersons) {
      persons =
        <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }


    return (
      <div className={classes.App}>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
      <Cockpit 
      appTitle={this.props.title}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonHandler}/>
        {persons}
      </div>

    );
  }
}


export default App; // allows parseing of extra css features


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

// containers manage state thats where state management should live.

// clear focus on structure granular components narrowley minded
// this.props inside class based compoent