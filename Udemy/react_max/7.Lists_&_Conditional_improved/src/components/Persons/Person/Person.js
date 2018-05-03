import React, {Component} from 'react'

import classes from './Person.css';

class Person extends Component  {
    constructor(props) { // only constructor gets props
        super(props);
        console.log('Person2.js_inside_constructor_1', props);

        // you can initaliase state inside constructor using this.state = {persons: []}
    }

    componentWillMount() {
        console.log('Person2_js_inside_componentWillMount_2')
    }
    componentDidMount() {
        console.log('Person2_js_inside_componentDidMount_4')
    }
    render() {
        console.log('Person3_js_insideRender_3')
        return (
        <div className={classes.Person} >
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
        )
    }
}

export default Person; // export the default need to wrap in style root

// React gives us to to props.children which it refers to any elements between opening and closing tag.

