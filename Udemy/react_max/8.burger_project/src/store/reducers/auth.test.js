import reducer from './auth';
import * as actionTypes from '../actions/actionsTypes';

describe('auth reducer', () => {
  it('should return the inital state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirect: '/'
    })
  })

  it('should store the token upon login', () => {
    expect(reducer({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirect: '/'
    }, {
        type: actionTypes.AUTH_SUCCESS,
        idtoken: 'token',
        userId: 'userID'
      })).toEqual({
        token: 'token',
        userId: 'userID',
        error: null,
        loading: false,
        authRedirect: '/'
      });
    })
  })
