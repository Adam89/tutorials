import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initalState = {
  orders: [],
  loading: false,
  purchased: false
}

const { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_START, PURCHASE_BURGER_FAIL, PURCHASE_INIT, FETCH_ORDERS_START, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAIL } = actionTypes;

const purchaseBurgerInit = (state, action) => {
  return updateObject(state, { purchased: false });
}

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { loading: true });
}

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    ...state,
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true
  });
}

const purchaseBurgerFail = (state, action) => {
  return updateObject(state, { loading: false });
}

const fetchOrderStart = (state, action) => {
  return updateObject(state, { loading: true });
}

const fetchOrderSuccess = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
}

const fetchOrderFail = (state, action) => {
  return updateObject(state, { loading: false });
}

const orderReducer = (state = initalState, action) => {
  switch (action.type) {
    case PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
    case PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
    case PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
    case PURCHASE_INIT: return purchaseBurgerInit(state, action);
    case FETCH_ORDERS_START: return fetchOrderStart(state, action);
    case FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state, action)
    case FETCH_ORDERS_FAIL: return fetchOrderFail(state, action)
    default: return state;
  }
};

export default orderReducer;