import { REQUEST_ITEM, RECEIVE_ITEM, RECEIVE_ITEM_ERROR, 
  CLEAR_ERROR } from './actionTypes';
  
import axios from 'axios';

const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}

const requestItem = () => {
  return {
    type: REQUEST_ITEM
  }
}

const receiveItem = (item) => {
  return {
    type: RECEIVE_ITEM,
    item: item
  }
}

const receiveItemError = (error) => {
  return {
    type: RECEIVE_ITEM_ERROR,
    error: error
  }
}

const getItem = (params) => {
  return (dispatch) => {
    console.log(params)
    axios.get("/api/v1/items/" + params.id, { 
      params
    }).then( response => {
      dispatch(receiveItem(response.data))
    }).catch(error => {dispatch(receiveItemError(error.message))});
  }
}

const fetchItemProfile = (data) => {
  return (dispatch, getState) => {
    dispatch(requestItem())
    if (getState().error) {
      return dispatch(clearError())
    }
    return dispatch(getItem(data))
  }
}

export const fetchItemProfileIfNeeded = (data) => {
  return (dispatch) => {
    return dispatch(fetchItemProfile(data))
  }
}

