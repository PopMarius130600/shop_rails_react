import React from 'react';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS } from '../actions/actionTypes'

const initialState = {
  user: {},
  signedUp: false,
  signingUp: false
};

export function signup(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
          signedUp: true,
          signingUp: false,
          user: action.user
      };
    case SIGNUP_SUCCESS:
      return {
        signingUp: false,
        signingUp: true,
        user: action.user
      };
    default:
      return state
  }
}