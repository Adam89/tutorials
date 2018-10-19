const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  const newState = {...state}
  const newStatePlus = newState
    switch(action.type) { 
      case 'INCREMENT':
        return {
          counter: newStatePlus.counter + 1
        }
      case 'DECREMENT':
        return {
          counter: newStatePlus.counter - 1
        }
      case 'SUBTRACT':
        return {
          counter: newStatePlus.counter - action.payload.val
        }
      case 'ADD':
        return {
          counter: newStatePlus.counter + action.payload.val
        }
    }
  return state;
};

export default reducer