import React, { Component } from 'react'; // react and components

export default class BookList extends Component {
	renderList() { // called in jsx below it's a helper function
		return this.props.books.map((book)) => { //each ele book create LI that contains book title
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