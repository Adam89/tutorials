import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				{/* basename=/myapp if your serving your app from sub directory default / */}
				<div className="App">
					<Blog />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

// wrap component in react dom package
