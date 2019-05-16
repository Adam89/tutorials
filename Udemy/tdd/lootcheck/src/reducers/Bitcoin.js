import { FETCH_BITCOIN } from '../actions/constants';

const bitcoinData = (state, action) => {
  return action.bitcoin
}

const bitcoin = (state = {}, action) => {
  switch(action.type) {
    case FETCH_BITCOIN: return bitcoinData(state, action)
    default: return state
  }
}

export default bitcoin;
