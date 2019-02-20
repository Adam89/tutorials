import React, { Component } from 'react';
import {Route} from 'react-router-dom'
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
    return (
      <div className="App">
        <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/logout" component={Logout}/>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState())
  };
};

export default connect(null, mapDispatchToProps)(App);


// everything loaded through route get route props children don't get them unless you pass them down

// HOC Router allows us to inject route props to any children withRouter(component)
