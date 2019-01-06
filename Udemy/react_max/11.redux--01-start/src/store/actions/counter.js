import * as actionTypes from './actionsTypes';

export const increment = () => { // CREATES THE ACTION 
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrement = () => { // CREATES THE ACTION 
  return {
    type: actionTypes.DECREMENT
  }
}

export const add = (val) => { // CREATES THE ACTION 
  return {
    type: actionTypes.ADD,
    payload: val
  }
}

export const subtract = (val) => { // CREATES THE ACTION 
  return {
    type: actionTypes.SUBTRACT,
    payload: val
  }
}
