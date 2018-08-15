import React, { Component } from 'react';
import axios from "../../../axios";
import { Route } from "react-router-dom";
import Post from '../../../components/Post/Post';
import FullPost from "../FullPost/FullPost";
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
		this.props.history.push( '/posts/' + id );
	}
	render() {
    console.log('post');
		let posts = <p style={{ textAlign: 'center' }}>Something went wrong </p>
		if (!this.state.error) {
      console.log(this.state.posts);
			posts = this.state.posts.map(post => {
        console.log(post,'postpost');
				return (
          //<Link to={'/' + post.id} >
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)} />
           // </Link>
        );
      });
    }
    console.log(this.props.match.url)
      return ( 
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} /> {/* Handles dynamic ID and loads posts path first*/}
      </div>
      );
		}
	}


export default Posts;