//https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store'; //mocks store
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'; //mocks fetches
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './Bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });

const mockResponse = { body: { bpi: 'BITCOIN PRICE INDEX' }};

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse) // stub returns mock response

it('creates an async action to fetch bitcoin value', () => {
  const expectedActions = [{bitcoin: mockResponse.body, type: FETCH_BITCOIN }]

  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  });
});