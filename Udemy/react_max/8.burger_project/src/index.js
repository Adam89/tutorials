import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ingredientReducer from "./store/reducers/ingredient";

const rootReducer = combineReducers({
  ingredients: ingredientReducer
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

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
