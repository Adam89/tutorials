import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
import fullPost from './FullPost/FullPost';
import NewPost from "./NewPost/NewPost";
import { Route, NavLink, Switch } from "react-router-dom";
class Blog extends Component {
  render() {
    return <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="active" exact activeStyle={{ color: "red", textDecoration: "underline" }}>
                  {" "}
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: "/new-post", hash: "#submit", search: "" } // this.props.match.url appends link to current path // jump to an id // query strings
                  }>
                  {" "}
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      <Switch> {/* First path thats a match will be rendered*/}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" exact component={fullPost} /> {/* Handles dynamic ID*/}
      </Switch>
      </div>;
  }
}

export default Blog;
