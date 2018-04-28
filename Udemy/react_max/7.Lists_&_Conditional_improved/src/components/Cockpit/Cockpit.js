import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => { // just a function

	const assignedClasses = []; // array of strings with space always pass stings
	let btnClass= '';
	if (props.showPersons) {
		btnClass = classes.Red
	}
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    } 

    return (
			<div className={classes.Cockpit}>
			<h1>{props.appTitle}</h1>
			<p className={assignedClasses.join(' ')}>This is really working</p>
			<button
				className={btnClass}
				onClick={props.clicked}>Toggle Persons
			</button>
		</div>
    );
}
export default cockpit


// function components renders jsx and are narrow minded we need a few places in application where state is managed. These root components would be containers like app blog or authentication features. 