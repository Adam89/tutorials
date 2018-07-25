import React, { Component } from 'react';
import axios from "../../../axios";
import Post from '../../../components/Post/Post';
import { Route } from "react-router-dom";
import fullPost from "../FullPost/FullPost";
import './Posts.css';

class Posts extends Component {
	state = {
		posts: []
		// selectedPostId: null,
		// error: false
	}
	componentDidMount() {
		console.log(this.props);
		axios.get('/posts')//using promises a default js object takes function and response
			.then(response => {
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map(post => {
					return {
						...post,
						author: 'Adam'
					}
				})
				this.setState({ posts: updatedPosts })
			})
			.catch(error => {
				console.log(error, 'error');
				// this.setState({ error: true })
			});
	}
  postSelectedHandler = (id) => { //Navigating Programmatically
		this.props.history.push('/posts/' + id)
	}
	render() {
		let posts = <p style={{ textAlign: 'center' }}>Something went wrong </p>
		if (!this.state.error) {
			posts = this.state.posts.map(post => {
				return (
          //<Link to={'/' + post.id} >
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)} />
           // </Link>
        );
			})
      return (
      <div>
        <section className="Posts">{posts}</section>
          <Route path={this.props.match.url + '/:id' } exact component={fullPost} /> {/* Handles dynamic ID and loads posts path first*/}
      </div>
      );
		}
	}
}

export default Posts;