import React from 'react'

const person  = (props) => { // es6 functional component
    return (
    <div>
        <p>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
    </div>
    )
}

export default person // export the default

// React gives us to to props.children which it refers to any elements between opening and closing tag.