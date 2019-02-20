import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT, SET_AUTH_REDIRECT } = actionTypes;

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirect: '/'
}

const authStart = (state, action) => {
  return updateObject(state, {error: null, loading:true});
}

const authSuccess = (state, action) => {
  return updateObject(state, { 
    token: action.idtoken, 
    userId: action.userId,
    error: null,
    loading: false
  });
}

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error, 
    loading:false});
}

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null });
}

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirect: action.path })
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START: return authStart(state, action);
    case AUTH_SUCCESS: return authSuccess(state, action);
    case AUTH_FAIL: return authFail(state, action);
    case AUTH_LOGOUT: return authLogout(state, action);
    case SET_AUTH_REDIRECT: return setAuthRedirectPath(state, action)
    default:
      return state;
  }
};

export default authReducer;