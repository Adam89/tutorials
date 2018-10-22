const initialState = {
  counter: 0,
  results: []
};
const reducer = (state = initialState, action) => {
  console.log(state, "state");
  const newState = { ...state };
  switch (action.type) {
    case "INCREMENT":
      newState.counter = state.counter + 1;
      console.log(newState, "Newstate");
      return newState;
    case "DECREMENT":
      newState.counter = state.counter - 1;
      return newState;
    case "SUBTRACT":
      newState.counter = state.counter - action.payload.val;
      return newState;
    case "ADD":
      newState.counter = state.counter + action.payload.val;
      return newState;
    case "STORE_RESULT":
      newState.results = state.results.concat({id: new Date(),value: state.counter});
      return newState;
    case "ON_DELETE_RESULT":
      newState.results = state.results.filter(result => result.id !== action.payload.resultEleId);
      return newState;
  }
  return state;
};

export default reducer;
