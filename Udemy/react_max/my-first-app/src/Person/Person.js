import React from 'react'

const person  = (props) => { // es6 functional component
    return <p>I'm {props.name} and I am {props.age} years old</p>
}

export default person // export the default