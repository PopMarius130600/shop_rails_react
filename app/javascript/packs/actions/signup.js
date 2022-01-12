import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, CLEAR_ERROR} from './actionTypes';

import axios from 'axios';

const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}

const requestSignup = (user) => {
  return {
    type: SIGNUP_REQUEST,
    user: user
  }
}

const successSignup = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    user: user
  }
}

const failureSignup = (error) => {
  return {
    type: SIGNUP_FAILURE,
    error: error
  }
}

const signup = (user) => {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  return (dispatch) => {
    axios.post("/api/v1/signup", { 
        user,
        paramsSerializer: function (user) {
          return jQuery.param(user)
        }
      },{ 
        headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }},
    ).then( response => {
      dispatch(successSignup(response.data))
    }).catch(error => {dispatch(failureSignup(error.message))});
  }
}

export const signupUser = (user) => {
  return (dispatch, getState) => {
    dispatch(requestSignup(user))
    if (getState().error) {
      return dispatch(clearError())
    }
    return dispatch(signup(user))
  }
}

