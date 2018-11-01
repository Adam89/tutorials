import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux' // connect to store
class Checkout extends Component {



  checkoutCancelledHandler = () => {
    this.props.history.goBack(); // go back to previous page
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data'); // replace current route
  }

  render() {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinueHandler}/>
        <Route 
          path={this.props.match.path + '/contact-data'} 
          component={ContactData} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients.ingredients
  }
}

export default connect(mapStateToProps)(Checkout);