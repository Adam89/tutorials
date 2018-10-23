import * as actionTypes from '../actions'; // import everything from actions and store inside object

const initialState = {
  counter: 0,
};

const { INCREMENT, ADD, DECREMENT, SUBTRACT} = actionTypes;

const counterReducer = (state = initialState, action) => {
  console.log(state, "state");
  const newState = { ...state };
  switch (action.type) {
    case INCREMENT:
      newState.counter = state.counter + 1;
      return newState;
    case DECREMENT:
      newState.counter = state.counter - 1;
      return newState;
    case SUBTRACT:
      newState.counter = state.counter - action.payload.val;
      return newState;
    case ADD:
      newState.counter = state.counter + action.payload.val;
      return newState;
  }
  return state;
};

export default counterReducer;
