import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import { Route, NavLink, Switch } from "react-router-dom";
class Blog extends Component {
  render() {
    return <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts/" activeClassName="active" exact activeStyle={{ color: "red", textDecoration: "underline" }}>
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
        <Route path="/new-post" component={NewPost} />
        <Route path="/" component={Posts} />
      </Switch>
      </div>;
  }
}

export default Blog;
