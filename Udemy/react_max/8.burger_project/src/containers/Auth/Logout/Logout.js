import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index';

const { logout } = actions;

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }
  render () {
    return <Redirect to="/"/>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout);