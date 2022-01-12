import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, CLEAR_ERROR} from './actionTypes';

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



const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  }
}

const successLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

const failureLogout = (error) => {
  return {
    type: LOGOUT_FAILURE,
    error: error
  }
}

const logout = () => {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  return (dispatch) => {
    axios.delete("/api/v1/logout",{ 
        headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }}
    ).then( response => {
      dispatch(successLogout())
    }).catch(error => {dispatch(failureLogout(error.message))});
  }
}

export const logoutUser = () => {
  return (dispatch, getState) => {
    dispatch(requestLogout())
    if (getState().error) {
      return dispatch(clearError())
    }
    return dispatch(logout())
  }
}

