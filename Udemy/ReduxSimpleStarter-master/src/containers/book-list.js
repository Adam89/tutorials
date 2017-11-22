import React, { Component } from 'react'; // react and components
import { connect } from 'react-redux' //import connect function from react redux its the glue between react redux
// always add key for lists has to be unique


class BookList extends Component { //book list is the component / container
	renderList() { // called in jsx below it's a helper function
		return this.props.books.map((book) => { //each ele in book array create LI that contains book title
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}


function mapStateToProps(state) { // take app state as arg state contains array of books and active book
// return object that is attached to this.props
// this function is the glue between react and redux
return {
	books: state.books // key books value state.books when state changes book list updates
	};
}



export default connect(mapStateToProps)(BookList) // connect take a function and a component and producers a container. Containers are aware of the state contained by redux it connects it to the redux store