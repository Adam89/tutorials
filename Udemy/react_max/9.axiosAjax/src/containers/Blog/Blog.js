import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import asyncComponent from '../../hoc/asyncComponent'; //lazy loading routes
//import NewPost from './NewPost/NewPost';

const asyncNewPost = asyncComponent(() => import('./NewPost/NewPost')); // import keyword as function whatever is passed only imported when function is executed and its executed when we render asyncNewPost to the screen

class Blog extends Component {
	state = {
		auth: true,
	};
	render() {
		let authenticated = null;
		if (this.state.auth) {
			authenticated = <Route path="/new-post" component={asyncNewPost} />; // this is a guard
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
					{/* <Redirect from="/" to="/posts" /> renders error page catch all routes */}
					<Route render={ErrorPage} />
					{/* <Route path="/" component={Posts} /> */}
				</Switch>
			</div>
		);
	}
}

export default Blog;
