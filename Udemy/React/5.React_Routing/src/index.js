import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'
import reducers from './reducers';
import PostsIndex from './components/post_index'; // need to import it here so its avaliable below
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


// class Hello extends React.Component {
//   render() {
//     return <div>Hello</div>
//   }
// }

// class Goodbye extends React.Component {
//   render() {
//     return <div>Goodbye</div>
//   }
// }

      {/* <Route path="/hello" component={Hello}/>
      <Route path="/goodbye" component={Goodbye} /> */}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Route path="/" component={PostsIndex} />
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));



  // Browser Router : Interacts with history library acts what to do based on a change in the url I want react router to look at entire url to show diffrent components

  //Route: Route component can be rendered inside of any other react component. Proivde config if url look like this show component

  // two important things we pass required on route compoentes path="ALWAYS A STRING IF A USER GO TO ROUTE SHOW THIS COMPONENT" component={COMPONENT YOU WANT TO GO TO} 

  // dont need app js when you route. Now when app is loaded it goes to / to start