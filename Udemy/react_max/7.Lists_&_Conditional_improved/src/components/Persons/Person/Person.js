import React, { Component } from "react";
import PropTypes from 'prop-types';
import classes from "./Person.css";
// import WithClass from '../../../hoc/WithClass';
import withClassTwo from '../../../hoc/WithClassTwo';
import Aux from '../../../hoc/Aux';
import { AuthContext } from '../../../containers/App';
class Person extends Component {
  constructor(props) {
    // only constructor gets props
    super(props);
    console.log("Person2.js_inside_constructor_1", props);
    this.inputElement = React.createRef(); // connect to element
    // you can initaliase state inside constructor using this.state = {persons: []}
  }

  componentWillMount() {
    console.log("Person2_js_inside_componentWillMount_2");
  }
  componentDidMount() {
    console.log("Person2_js_inside_componentDidMount_4");
    // if (this.props.position === 0) {
    // this.inputElement.current.focus();
    // }
  }

  focus() {
    this.inputElement.current.focus()
  }
  render() {
    console.log("Person3_js_insideRender_3");
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p> I'm consuming autheticated context!</p>: null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = { // validating prop types JS object
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClassTwo(Person, classes.Person); // export the default need to wrap in style root

// React gives us to to props.children which it refers to any elements between opening and closing tag.


// ref takes a dynamic input / function which you set up a refrence to the input. Pass input only allowed on stateful component.