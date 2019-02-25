import axios from 'axios';
import * as actionTypes from './actionsTypes';


const { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT, SET_AUTH_REDIRECT } = actionTypes;

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
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
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
        const {idToken, localId, expiresIn} = response.data;
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        localStorage.setItem('token', idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', localId)
        dispatch(authSuccess(idToken, localId));
        dispatch(checkAuthTimeout(expiresIn));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      })
  }
}

export const setAuthRedirectPath = (path) => {
  return {
    type: SET_AUTH_REDIRECT,
    path: path
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
          dispatch(logout());
        } else {
          const userId = localStorage.getItem('userId');
          dispatch(authSuccess(token, userId));
          dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};