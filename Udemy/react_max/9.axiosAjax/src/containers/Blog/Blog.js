import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
	state = {
		auth: false,
	};
	render() {
		let authenticated = null;
		if (this.state.auth) {
			authenticated = <Route path="/new-post" component={NewPost} />; // this is a guard
		}
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink
									to="/posts/"
									exact
									activeClassName="active"
									activeStyle={{ color: 'red', textDecoration: 'underline' }}>
									Posts
								</NavLink>
							</li>
							<li>
								<NavLink
									to={
										{
											pathname: '/new-post',
											hash: '#submit',
											search: '',
										} // this.props.match.url appends link to current path // jump to an id // query strings
									}>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					{' '}
					{/* First path thats a match will be rendered */}
					{authenticated}
					<Route path="/posts" component={Posts} />
					{/* <Redirect from="/" to="/posts" /> */}
					<Route render={ErrorPage} />
					{/* <Route path="/" component={Posts} /> */}
				</Switch>
			</div>
		);
	}
}

export default Blog;
