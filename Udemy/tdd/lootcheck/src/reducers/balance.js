import * as constants from '../actions/constants';

const setBalanceState = (state, action) => {
  return action.balance
}

const depositState = (state, action) => {
  return state + action.deposit
}

const withdrawState = (state, action) => {
  return state - action.withdraw
}

const balance = (state = 0, action) => {
  switch (action.type) {
    case constants.SET_BALANCE: return setBalanceState(state, action)
    case constants.DEPOSIT: return depositState(state, action)
    case constants.WITHDRAW: return withdrawState(state, action)
    default: return state
  }
}

export default balance