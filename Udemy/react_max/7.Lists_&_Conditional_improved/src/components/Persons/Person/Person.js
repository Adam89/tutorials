import React from 'react'

import classes from './Person.css';

const person  = (props) => { // es6 functional component
    return (
    <div className={classes.Person} >
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person; // export the default need to wrap in style root

// React gives us to to props.children which it refers to any elements between opening and closing tag.