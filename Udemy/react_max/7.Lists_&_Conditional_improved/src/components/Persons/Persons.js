import React, { PureComponent } from 'react'// should component update build in
import Person from './Person/Person';

class Persons extends PureComponent {
        constructor(props) { // only constructor gets props
                super(props);
                console.log('Person.js_inside_constructor_1', props);
                this.lastPersonRef = React.createRef();
                // you can initaliase state inside constructor using this.state = {persons: []}
        }
        componentWillMount() {
                console.log('Person_js_inside_componentWillMount_2')
        }
        componentDidMount() {
                console.log('Person_js_inside_componentDidMount_4')
                this.lastPersonRef.current.focus();
        }
        componentWillReceiveProps(nextProps) { //deprecated
                console.log('[Update Persons.JS] inside componet will recieve props', nextProps);
        }
        // shouldComponentUpdate(nextProps, nextState) { // RETURNS TRUE OR FALSE TRUE RUNS CODE FALSE DOES NOT
        //         console.log('[Update Persons.JS] inside componet shouldComponentUpdate', nextProps, nextState);
        //         return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked; // only checks against new object as we slice state
        // }
        componentWillUpdate(nextProps, nextState) {
                console.log('[Update Persons.JS] inside componet componentWillUpdate', nextProps, nextState);
        }
        componentDidUpdate() { // ONLY THIS PROPS THIS STATE B=
                console.log('[Update Persons.JS] inside componet componentDidUpdate')
        }
        render() {
                console.log('Person_js_insideRender_3')
                return this.props.persons.map((person, index) => { // index is parameter on map key has to be on outer
                        return <Person
                                name={person.name}
                                position={index}
                                age={person.age}
                                key={person.id}
                                ref={this.lastPersonRef}
                                click={() => this.props.clicked(index)}
                                changed={(event) => this.props.changed(event, person.id)} />
                }); // If its it in one line you can omit the return statment
        }
}
export default Persons;

//stateful compomnent

// need to use this.props on stateful components