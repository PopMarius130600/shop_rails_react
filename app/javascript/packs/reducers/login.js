import React from 'react';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../actions/actionTypes'

const initialState = {
  user: {},
  loggedIn: false,
  loggingIn: false,
  signedUp: false,
  signingUp: true,
};

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state,
          loggedIn: true,
          loggingIn: false,
          user: action.user
      };
    case LOGIN_SUCCESS:
      console.log(action)
      return {...state,
        loggedIn: false,
        loggingIn: true,
        signingUp: false,
        user: action.user
      };
      
    case LOGOUT_REQUEST:
      return {...state,
        signedUp: true,
      }
    case LOGOUT_SUCCESS:
      return {...state,
        signedUp: false,
        signingUp: true, 
        loggingIn: false
      }
    default:
      return state
  }
}