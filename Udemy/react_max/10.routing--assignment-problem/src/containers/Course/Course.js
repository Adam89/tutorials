import React, { Component } from 'react';

class Course extends Component {
	state = {
		courseTitle: '',
	};
	componentDidMount() {
		// initial render of component
		this.parseQuery();
	}
	componentDidUpdate() {
		// switch between component
		this.parseQuery();
	}

	parseQuery() {
		const query = new URLSearchParams(this.props.location.search); // parses query params

		for (let param of query.entries()) {
			// loops through key value pairs
			if (this.state.courseTitle !== param[1])
				// stops infinite loops only updates if title changes
				this.setState({ courseTitle: param[1] });
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.courseTitle}</h1>
				<p>
					You selected the Course with ID: {this.props.match.params.courseId}
				</p>
			</div>
		);
	}
}

export default Course;
