import React, { Component } from 'react';

const asyncComponent = importComponent => {
	// going to pass in a function
	return class extends Component {
		state = {
			// state will be set to dynamically loaded component
			component: null,
		};
		componentDidMount() {
			importComponent() // function that returns a promise function reference
				.then(cmp => {
					this.setState({ component: cmp.default }); // one property default
				});
		}
		render() {
			const RenderedComponent = this.state.component; // needs pascal casing
			return RenderedComponent ? <RenderedComponent {...this.props} /> : null; // pass any props to this rendered component
		}
	};
};

export default asyncComponent; // this is a valid component returns a class with a render method will render a dynamically rendered component creates a code split called chunks loads components async
