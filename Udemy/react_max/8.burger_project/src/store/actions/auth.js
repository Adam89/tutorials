import axios from 'axios';
import * as actionTypes from './actionsTypes';


const { AUTH_START, AUTH_SUCCESS, AUTH_FAIL} = actionTypes;

export const authStart = () => {
  return {
    type: AUTH_START
  };
}

export const authSuccess = () => {
  return {
    type: AUTH_SUCCESS,
    // authData: authData
  };
}

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error
  };
}

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true

    }
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAW03PL3oRkQFa7UDXd01sz30bQZLm8RQ0', authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      })
  }
}