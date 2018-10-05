import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout}/>   
        </Layout>
      </div>
    );
  }
}

export default App;


// everything loaded through route get route props children don't get them unless you pass them down

// HOC Router allows us to inject route props to any children withRouter(component)
