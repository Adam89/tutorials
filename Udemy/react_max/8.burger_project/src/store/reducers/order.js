import * as actionTypes from '../actions/actionsTypes';

const initalState = {
  orders:[],
  loading: false,
  purchased: false
}

const { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_START, PURCHASE_BURGER_FAIL, PURCHASE_INIT } = actionTypes;

const orderReducer = (state = initalState, action) => {
  switch (action.type) {
    case PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      }
    break;
    case PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      }
        return {
          ...state,
          loading:false,
          orders: state.orders.concat(newOrder),
          purchased: true
        };
      break;
    case PURCHASE_BURGER_FAIL:
        return {
          ...state,
          loading: false
        };
      break;
    case PURCHASE_INIT:
        return {
          ...state,
          purchased: false
        };
      break;

    default:
        return state;
      break;
  }
};

export default orderReducer;