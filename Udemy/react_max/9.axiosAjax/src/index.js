import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

axios.interceptors.request.use(request => { // add auth headers on request
  console.log(request,'interceptors'); // edit configs based on specific requests
  return request // always return forwards to then in component
}, error => {
  console.log(error) // could send logs to server with another posts
  return Promise.reject(error); //forwards to actual component too
});

axios.interceptors.response.use(response => { // check responses do stuff
  console.log(response);
  return response
}, error => {
  console.log(error);
  return Promise.reject(error);
});

/* You learned how to add an interceptor, getting rid of one is also easy.Simply store the reference to the interceptor in a variable and call eject  with that reference as an argument, to remove it(more info: https://github.com/axios/axios#interceptors):

var myInterceptor = axios.interceptors.request.use(function () {... });
axios.interceptors.request.eject(myInterceptor);
*/


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
