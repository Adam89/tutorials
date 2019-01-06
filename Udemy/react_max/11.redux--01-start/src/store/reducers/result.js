import * as actionTypes from '../actions/actionsTypes'; // import everything from actions and store inside object
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const {STORE_RESULT, ON_DELETE_RESULT} = actionTypes;

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return updateObject(state, {results:state.results.concat({id: new Date(), value: action.payload})});
    case ON_DELETE_RESULT:
      const updatedArray = state.results.filter(result => result.id !== action.payload);
      return updateObject(state, {results:updatedArray});
  }
  return state;
};

export default resultReducer;
