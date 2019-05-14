import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import balanceReducer from './reducers/balance';
import { Provider } from 'react-redux';
import App from './components/App.js';

const rootReducer = combineReducers({
  balance: balanceReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))