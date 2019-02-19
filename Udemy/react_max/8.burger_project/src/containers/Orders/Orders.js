import React, { Component } from "react";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-orders";
import { connect } from 'react-redux'; 
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

const { fetchOrders } = actions
class Orders extends Component {

  componentDidMount() {
    // fetch when loaded
    this.props.onFetchOrders(this.props.token);
  }

  render() {
    let orders = <Spinner />
    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price} />
      ))
    }
    return (
      <div>
        {orders}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.authentication.token
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token) => dispatch(fetchOrders(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios)); // pass axios

// output orders
