import * as actionTypes from '../actions/actionsTypes'; // import everything from actions and store inside object
import { updateObject } from '../utility';
const initialState = {
  counter: 0,
};

const { INCREMENT, ADD, DECREMENT, SUBTRACT} = actionTypes;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return updateObject(state, {counter:state.counter + 1});
    case DECREMENT:
      return updateObject(state, {counter:state.counter - 1});
    case SUBTRACT:
      return updateObject(state, {counter:state.counter - action.payload});
    case ADD:
      return updateObject(state, {counter:state.counter + action.payload});
  }
  return state;
};

export default counterReducer;
