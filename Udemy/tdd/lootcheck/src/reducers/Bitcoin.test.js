import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/constants';

describe('bitcoinReducer', () => {
  const bitCoinData = { bpi: 'bitcoin price index' }
  it('fetches and sets bitcoin data', () => {
    expect(bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitCoinData }))
    .toEqual(bitCoinData)
  });
});