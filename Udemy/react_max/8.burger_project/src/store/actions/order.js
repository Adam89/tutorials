import * as actionTypes from './actionsTypes';
import axios from "../../axios-orders";

const { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL } = actionTypes;

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData 
  }
}

export const purchaseBurgerFail = (error) => {
  return {
    type: PURCHASE_BURGER_FAIL,
    error: error
  }
}

// async

export const purchaseBurgerStart = (orderData) => {
  return dispatch => {
    axios.post('/orders.json', orderData)  // .json for firebase
    .then(response => {
      console.log(response.data)
      dispatch(purchaseBurgerSuccess(response.data, orderData))
    })
    .catch(error => {
      dispatch(purchaseBurgerFail(error))
    });
  }
}