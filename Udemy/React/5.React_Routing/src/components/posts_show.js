import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/fetch_post';
import { Link } from 'react-router-dom';
class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params; // give me url id
        console.log(id);
        this.props.fetchPost(id); // take post out of app state and into component mapStateToProps
    }

    onDeleteClick() { // need to call action creater to delete post from backend db
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/'); // programatic navigation
        });
    }
    render() {
        //posts[this.props.match.params.id]; relies on big posts object;
        const { post } = this.props;

        if (!post) {
            return <div>loading</div>
        }
        return(
            <div>
                <Link to="/" className="btn btn-primary">Home</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
                    Delete post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) { // give me list of post
     return {post: posts[ownProps.match.params.id]}; // component will only recieve the single post it needs


     //you can use mapStateToProps to work out the state before it reaches the component
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);

// posts show needs to be responsible for fetching its own data as its showing specific post

//part of react router this.props.match.params.id; match is top level params list all tokens in wildcard like id or commentID


//mapStateToProps first arg is always app state second arg is ownProps is the props object that is heading to the component