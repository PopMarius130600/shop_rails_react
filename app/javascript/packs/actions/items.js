import { REQUEST_ITEMS, RECEIVE_ITEMS, RECEIVE_ITEMS_ERROR, 
  CLEAR_ERROR } from './actionTypes';
  
import axios from 'axios';

const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}

const requestItems = () => {
  return {
    type: REQUEST_ITEMS
  }
}

const receiveItems = (items) => {
  return {
    type: RECEIVE_ITEMS,
    items: items
  }
}

const receiveItemsError = (error) => {
  return {
    type: RECEIVE_ITEMS_ERROR,
    error: error
  }
}

const getItems = (data) => {
  return (dispatch) => {
    axios.post("/api/v1/items/search", { 
        data,
        paramsSerializer: function (data) {
          return jQuery.param(data)
        }
      }).then( response => {
      dispatch(receiveItems(response.data))
    }).catch(error => {dispatch(receiveItemsError(error.message))});
  }
}

const fetchItemList = (params) => {
  return (dispatch, getState) => {
    dispatch(requestItems())
    if (getState().error) {
      return dispatch(clearError())
    }
    return dispatch(getItems(params))
  }
}

export const fetchItemListIfNeeded = (params) => {
  return (dispatch) => {
    return dispatch(fetchItemList(params))
  }
}

