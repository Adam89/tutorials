import React from 'react'

import './Person.css';

const person  = (props) => { // es6 functional component
    return (
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person // export the default

// React gives us to to props.children which it refers to any elements between opening and closing tag.