import React from 'react';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/actionTypes'

const initialState = {
  user: {},
  loggedIn: false,
  loggingIn: false
};

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
          loggingIn: true,
          user: action.user
      };
    case LOGIN_SUCCESS:
      return {
          loggedIn: true,
          user: action.user
      };
    case LOGIN_FAILURE:
      return {};
    default:
      return state
  }
}