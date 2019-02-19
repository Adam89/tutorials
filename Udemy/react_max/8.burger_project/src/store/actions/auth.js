import axios from 'axios';
import * as actionTypes from './actionsTypes';


const { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } = actionTypes;

export const authStart = () => {
  return {
    type: AUTH_START
  };
}

export const authSuccess = (token, userId) => {
  return {
    type: AUTH_SUCCESS,
    idtoken: token,
    userId: userId
  };
}

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error
  };
}

export const logout = () => {
  return {
    type: AUTH_LOGOUT
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    const key = 'AIzaSyAW03PL3oRkQFa7UDXd01sz30bQZLm8RQ0'
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + key;
    if (!isSignUp) {
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + key;
    }
    axios.post(url, authData)
      .then(response => {
        console.log(response);
        const {idToken, localId, expiresIn} = response.data
        dispatch(authSuccess(idToken, localId));
        dispatch(checkAuthTimeout(expiresIn));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      })
  }
}