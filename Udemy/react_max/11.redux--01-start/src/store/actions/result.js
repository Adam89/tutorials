import * as actionTypes from './actionsTypes';

export const saveResult = (result) => {

  return {
    type: actionTypes.STORE_RESULT,
    payload: result
  }
}

export const storeResult = (result) => { // CREATES THE ACTION 
  return (dispatch, getState) => { // get state is a util method which allows us to getState if we need to use state within logic related to async action
      setTimeout(() => {
        const oldCounter = getState().ctr.counter; // don't overuse util funcs
        console.log(oldCounter, 'OldCounter');
        dispatch(saveResult(result))
      }, 2000);
    } 
  }

export const onDeleteResult = (resultEleId) => { // CREATES THE ACTION 
  return {
    type: actionTypes.ON_DELETE_RESULT,
    payload: resultEleId
  }
}