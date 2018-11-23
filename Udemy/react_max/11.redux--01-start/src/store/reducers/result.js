import * as actionTypes from '../actions/actions'; // import everything from actions and store inside object

const initialState = {
  results: []
};

const {STORE_RESULT, ON_DELETE_RESULT} = actionTypes;

const resultReducer = (state = initialState, action) => {
  console.log(state, "state");
  const newState = { ...state };
  switch (action.type) {
    case STORE_RESULT:
      newState.results = state.results.concat({id: new Date(), value: action.payload.result});
      console.log(newState, "Newstate2");
      return newState;
    case ON_DELETE_RESULT:
      newState.results = state.results.filter(result => result.id !== action.payload.resultEleId);
      console.log(newState, "Newstate");
      return newState;
  }
  return state;
};

export default resultReducer;
