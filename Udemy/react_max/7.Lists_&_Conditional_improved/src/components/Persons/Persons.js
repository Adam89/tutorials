import React, { Component } from 'react'
import Person from './Person/Person';

class Persons extends Component {
        constructor(props) { // only constructor gets props
                super(props);
                console.log('Person.js_inside_constructor_1', props);

                // you can initaliase state inside constructor using this.state = {persons: []}
        }

        componentWillMount() {
                console.log('Person_js_inside_componentWillMount_2')
        }
        componentDidMount() {
                console.log('Person_js_inside_componentDidMount_4')
        }
        render() {
                console.log('Person_js_insideRender_3')
                return this.props.persons.map((person, index) => { // index is parameter on map key has to be on outer
                        return <Person
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                click={() => this.props.clicked(index)}
                                changed={(event) => this.props.changed(event, person.id)} />
                }); // If its it in one line you can omit the return statment
        }
}
export default Persons;

//stateful compomnent

// need to use this.props on stateful components