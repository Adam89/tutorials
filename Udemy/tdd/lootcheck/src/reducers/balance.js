import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies'

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const setBalanceState = (state, action) => {
  return action.balance
}

const depositState = (state, action) => {
  return state + action.deposit
}

const withdrawState = (state, action) => {
  return state - action.withdrawal
}

const balance = (state = 0, action) => {
  let balance;
  switch (action.type) {
    case constants.SET_BALANCE: 
      balance = setBalanceState(state, action)
      break
    case constants.DEPOSIT: 
      balance = depositState(state, action)
      break
    case constants.WITHDRAW: 
      balance = withdrawState(state, action)
      break
    default: balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state
  }
  bake_cookie(BALANCE_COOKIE, balance)
  return balance
}


export default balance