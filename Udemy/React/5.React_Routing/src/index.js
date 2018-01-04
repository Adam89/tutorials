import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


class Hello extends React.Component {
  render() {
    return <div>Hello</div>
  }
}

class Goodbye extends React.Component {
  render() {
    return <div>Goodbye</div>
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Route path="/hello" component={Hello}/>
      <Route path="/goodbye" component={Goodbye} />
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));



  // Browser Router : Interacts with history library acts what to do based on a change in the url I want react router to look at entire url to show diffrent components

  //Route: Route component can be rendered inside of any other react component. Proivde config if url look like this show component

  // two important things we pass required on route compoentes path="ALWAYS A STRING IF A USER GO TO ROUTE SHOW THIS COMPONENT" component={COMPONENT YOU WANT TO GO TO} 