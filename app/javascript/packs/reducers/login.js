import React from 'react';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/actionTypes'

const initialState = {
  id: {},
  email: {},
  loggedIn: false,
  loggingIn: false
};

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
          loggingIn: true,
          email: action.email,
          id: action.id
      };
    case LOGIN_SUCCESS:
      return {
        loggingIn: true,
        email: action.email,
        id: action.id
      };
    case LOGIN_FAILURE:
      return {};
    default:
      return state
  }
}