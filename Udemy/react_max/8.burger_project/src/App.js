import React, { Component } from 'react';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const {authCheckState} = actions;
class App extends Component {
  
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/auth" component={Auth}/>
        <Redirect to="/"/>
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={BurgerBuilder}/>
          <Route path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout}/>
          <Route path="/logout" component={Logout}/>
          <Redirect to="/"/>
        </Switch>
      );
    }
    return (
      <div className="App">
        <Layout>
        {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authentication.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


// everything loaded through route get route props children don't get them unless you pass them down

// HOC Router allows us to inject route props to any children withRouter(component)
