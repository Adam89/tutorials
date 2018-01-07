import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/fetch_post';

class PostsIndex extends Component {
    componentDidMount() { // auto called by react once component has rendered
        this.props.fetchPosts(); // method is in the action creator
    }

    renderPosts() { //loop over posts using object map for lodash and generate one LI for every post
       return  _.map(this.props.posts, post => { // first arg is the list of objects second arg is the return you want rendered as a function
           return (
               <li className="list-group-item" key={post.id}>
                {post.title}
               </li>
           )
       })
    }

    render() {
        console.log(this.props.posts);
        return (
            <div>
                <h3> Posts </h3>
                    <ul className="list-group">
                        {this.renderPosts()}
                    </ul>
            </div>
        );
    }
}

function mapStateToProps(state) { // list of posts to get inside components from app level state
    return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

// state object is done diff we get back an array of objects as the posts each post has an ID. URL is an important part of APP state. The id in the url is basically the active post object we have used in previous apps. Therefore we don't need to generate an active post object as the URL ID assumes this and renders components. 

// store list of post inside object rather then the returned array this allows us to have keys that match the ID. Allows us to make it easier to find a particulat post. 

// single piece of state which is the post object where the key is the ID of the post and the value is the particular post.

//1.Fetch list of posts and serve them up to a post index component. 

// import the action and connect to the component and wire it up

// usually wired up the connect helper by using mapdispacthtoprops when we need an action creater into a component to allow us to call it off the props object

//you can use a shortcut to wire up action creater you can define just by pushing the action as an argument to connect as this does the work for us instead of mapDispacthToProps. you would use map dispacth to props if you wanted to add some extra code to do stuff before action is pumped into component

/*
AS SOON AS COMPONENT RENDERS MAKE API CALL TO GET LIST OF POSTS

LIFECYCLE METHODS : is a function on a react component class that is automatically called 

Component did mount

everything renders one time before ajax call thats why when you console log you get two objects
*/