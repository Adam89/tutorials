import { combineReducers } from 'redux';
import balance from './Balance';
import bitcoin from './Bitcoin';

const rootReducer = combineReducers({
  balance,
  bitcoin
});

export default rootReducer