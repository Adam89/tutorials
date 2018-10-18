const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  const newState = {...state}
  const newStatePlus = newState
  if(action.type === 'INCREMENT') {
    // counter: state.counter + 1
    return {
      counter: newStatePlus.counter + 1
    }
  }
  if(action.type === 'DECREMENT') {
    // counter: state.counter + 1
    return {
      counter: newStatePlus.counter - 1
    }
  }
  if(action.type === 'SUBTRACT') {
    // counter: state.counter + 1
    return {
      counter: newStatePlus.counter - action.payload.val
    }
  }
  if(action.type === 'ADD') {
    // counter: state.counter + 1
    return {
      counter: newStatePlus.counter + action.payload.val
    }
  }
  return state;
};

export default reducer