import React, {Component} from 'react'; // import react and pull of component and store in const component

/* every component that is classed based needs to have a render method that returns JSX

--------------- Events ---------------

handling events in react has 2 steps
declare event handler function ran when event occurs
pass the event handler to the element that we want to monitor for events know when input ele inside search bar has text changed

onChange is a prop or property access to the change event react specific
value is a prop or property access that sets the value
---------------------------------------------

--------------- State ------------------------------

is a plain JS object that is used to record and react to a user's event. Each class based component has it's own state object.When a component changes the render function runs and the state changes.

Controlled field is a form element whose value is set by the state value only ever changes when state changes

functional components don't have access to state
functional components can take in class based components in the JSX

---------------------------------------------

--------------- Downwards data flow ------------------------------

only the most parent component in the application should be responsible for fetching data

------------------------------------------------------------
*/

// const SearchBar = () => { //functional component as its a function
// 	return <input />

// };




class SearchBar extends Component { //SearchBar class component JS object define a new class and give it access to all react.component functionality access to methods etc
	constructor(props) {
		super(props);

		this.state = { term: ''}; // this is the only place we manipulate state. this.state = object everywhere else in the component we use this.setState to change the state
	}
	render() { // this is a method on a class return some JSX all class based components needs this
		return (
			<div>
				<input
					value={this.state.term} // value provided by state controlled component
					onChange={event => this.setState({ term: event.target.value})} />
			</div>
		);
	}
};

export default SearchBar;