import React, { Component } from "react";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        errorMsg: 'Please enter a valid name',
        touched: false
      },
    }
  }
  render() {
    return (
      <div>
        <form>

        </form>
      </div>
    );
  }
}