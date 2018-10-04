import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
  };

  componentDidMount() {
      const query = new URLSearchParams(this.props.location.search) // get ingredients from url
      const ingredients = {};
      for (let param of query.entries()) {
        ingredients[param[0]] = +param[1]; // key + number from an array
      }
      this.setState({ingredients})
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack(); // go back to previous page
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contactData'); // replace current route
  }

  render() {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinueHandler}/>
      </div>
    )
  }
}

export default Checkout;