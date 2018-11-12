import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux'; // injects store into react components

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({ // create app sections
  ctr: counterReducer,
  res: resultReducer
});

const logger = store => { // this is a middleware
  return next => {
    return action => { // recieves store and action
      console.log('[middleware] Dispatching,', action)
      const result = next(action)
      console.log('[middleware] next state', store.getState())
      return result
    }
  } // function to let action continue journey onto reducer
};

const debug = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
    debug
  )
  ); // react-redux connects store to react application

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
