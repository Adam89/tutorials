import * as actionTypes from '../actions/actionsTypes';

const initalState = {
  orders:[],
  loading: false
}

const { PURCHASE_BURGER_SUCCESS } = actionTypes;

const orderReducer = (state, action) => {
  switch (action.type) {
    case PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      }
        return {
          ...state,
          loading:false,
          orders: state.orders.concat(newOrder)
        };
      break;
    case PURCHASE_BURGER_FAIL:
        return {
          ...state,
          loading: false
        };
      break;

    default:
        return state;
      break;
  }
};

export default orderReducer;