import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, CLEAR_ERROR} from './actionTypes';

import axios from 'axios';

const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}

const requestLogin = (user) => {
  return {
    type: LOGIN_REQUEST,
    user: user
  }
}

const successLogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user: user
  }
}

const failureLogin = (error) => {
  return {
    type: LOGIN_FAILURE,
    error: error
  }
}

const getUser = (user) => {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  return (dispatch) => {
    axios.post("/api/v1/login", { 
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
      dispatch(successLogin(response.data))
    }).catch(error => {dispatch(failureLogin(error.message))});
  }
}

export const fetchUser = (user) => {
  return (dispatch, getState) => {
    dispatch(requestLogin(user))
    if (getState().error) {
      return dispatch(clearError())
    }
    return dispatch(getUser(user))
  }
}

