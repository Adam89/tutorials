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
  }
}