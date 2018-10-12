const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if(action.type === 'INCREMENT') {
    const newState = {...state}
    const newStatePlus = newState.counter + 1
    // counter: state.counter + 1
    return {
      counter:newStatePlus
    }
  }
  return state;
};

export default reducer