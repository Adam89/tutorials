export const INCREMENT = 'INCREMENT';
export const ADD = 'ADD';
export const DECREMENT = 'DECREMENT';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const ON_DELETE_RESULT = 'ON_DELETE_RESULT';


export const increment = () => { // CREATES THE ACTION 
  return {
    type: INCREMENT
  }
}

export const decrement = () => { // CREATES THE ACTION 
  return {
    type: DECREMENT
  }
}

export const add = (val) => { // CREATES THE ACTION 
  return {
    type: ADD,
    payload: val
  }
}

export const subtract = (val) => { // CREATES THE ACTION 
  return {
    type: SUBTRACT,
    payload: val
  }
}

export const saveResult = (result) => {
  return {
    type: STORE_RESULT,
    payload: result
  }
}

export const storeResult = (result) => { // CREATES THE ACTION 
  return dispatch => {
      setTimeout(() => {
        dispatch(saveResult(result))
      }, 2000);
    } 
  }

export const onDeleteResult = (resultEleId) => { // CREATES THE ACTION 
  return {
    type: ON_DELETE_RESULT,
    payload: resultEleId
  }
}