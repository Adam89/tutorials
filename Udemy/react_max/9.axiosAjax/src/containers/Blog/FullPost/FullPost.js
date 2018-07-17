import React, { Component } from 'react';
import axios from "axios";
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() { // want to fetch data whenever we receive new props
      console.log(this.props);
        if (this.props.match.params.id) { // passed with react router
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) { // makes only 1 http request stops infinite loops
              axios
                .get(
                  "/posts/" +
                this.props.match.params.id
                )
                .then(response => {
                  // console.log(response);
                  this.setState({ loadedPost: response.data });
                });
            }
        }
    }

    deletePostHandler = () => {
    axios.delete("/posts/" +
        this.props.id).then(response => {
            console.log(response,'delete');
        })
    }
    
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading</p>;
        }
        if (this.state.loadedPost) {

        
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                </div>
            </div>

        );
    }
        return post;
    }
}

export default FullPost;