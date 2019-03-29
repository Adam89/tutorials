import React, { useEffect, Suspense } from 'react';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const {authCheckState} = actions;

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
})

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders');
})

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
})


const app = (props) =>  {

  useEffect(() => {
    props.onTryAutoSignup();
  }, []);

    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/auth" component={() => <Auth/>}/>
        <Redirect to="/"/>
      </Switch>
    );

    if (props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={BurgerBuilder}/>
          <Route path="/auth" render={() => <Auth/>}/>
          <Route path="/orders" component={() => <Orders/>} />
          <Route path="/checkout" component={() => <Checkout/>}/>
          <Route path="/logout" component={Logout}/>
          <Redirect to="/"/>
        </Switch>
      );
    }
    return (
      <div className="App">
        <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
        </Layout>
      </div>
    );
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(app));


// everything loaded through route get route props children don't get them unless you pass them down

// HOC Router allows us to inject route props to any children withRouter(component)
