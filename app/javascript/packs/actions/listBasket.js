import { REQUEST_ADD_ITEM_BASKET, SUCCESS_ADD_ITEM_BASKET, ERROR_ADD_ITEM_BASKET,
  REQUEST_REMOVE_ITEM_BASKET, SUCCESS_REMOVE_ITEM_BASKET, ERROR_REMOVE_ITEM_BASKET,
  REQUEST_DELETE_ITEM_BASKET, SUCCESS_DELETE_ITEM_BASKET, ERROR_DELETE_ITEM_BASKET,
  CLEAR_ERROR } from './actionTypes';
  
import axios from 'axios';

const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}

const requestAddItemBasket = () => {
  return {
    type: REQUEST_ADD_ITEM_BASKET
  }
}

const successAddItemBasket = (item) => {
  return {
    type: SUCCESS_ADD_ITEM_BASKET,
    item: item
  }
}

const failureAddItemBasket = (error) => {
  return {
    type: ERROR_ADD_ITEM_BASKET,
    error: error
  }
}

const putItemToBasket = (item_id) => {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  return (dispatch) => {
    axios.post("/api/v1/item_lists", { 
        item_id,
        paramsSerializer: function (item_id) {
          return jQuery.param(item_id)
        }
      },{ 
        headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }},
    ).then( response => {
      console.log("AICI RESPONSE")
      console.log(response)
      console.log(response.headers)
      dispatch(successAddItemBasket(response.data))
    }).catch(error => {dispatch(failureAddItemBasket(error.message))});
  }
}

export const addItemToBasket = (item_id) => {
  return (dispatch, getState) => {
    dispatch(requestAddItemBasket())
    if (getState().error) {
      return dispatch(clearError())
    }
    return dispatch(putItemToBasket(item_id))
  }
}


const requestRemoveItemBasket = () => {
  return {
    type: REQUEST_REMOVE_ITEM_BASKET
  }
}

const successRemoveItemBasket = () => {
  return {
    type: SUCCESS_REMOVE_ITEM_BASKET
  }
}

const failureRemoveItemBasket = (error) => {
  return {
    type: ERROR_REMOVE_ITEM_BASKET,
    error: error
  }
}

const removeItem = (item_id) => {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  return (dispatch) => {
    axios.post("/api/v1/item_lists/" + item_id.id + "/reduce", { 
      item_id,
      paramsSerializer: function (item_id) {
        return jQuery.param(item_id)
      }
    }, { 
        headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }},
    ).then( response => {
      dispatch(successRemoveItemBasket(response.data))
    }).catch(error => {dispatch(failureRemoveItemBasket(error.message))});
  }
}

export const removeItemToBasket = (item_id) => {
  return (dispatch, getState) => {
    dispatch(requestRemoveItemBasket())
    if (getState().error) {
      return dispatch(clearError())
    }
    return dispatch(removeItem(item_id))
  }
}


const requestDeleteItemBasket = () => {
  return {
    type: REQUEST_DELETE_ITEM_BASKET
  }
}

const successDeleteItemBasket = () => {
  return {
    type: SUCCESS_DELETE_ITEM_BASKET
  }
}

const failureDeleteItemBasket = (error) => {
  return {
    type: ERROR_DELETE_ITEM_BASKET,
    error: error
  }
}

const deleteItem = (item_id) => {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  return (dispatch) => {
    axios.delete("/api/v1/item_lists/" + item_id.id, { 
      item_id,
      paramsSerializer: function (item_id) {
        return jQuery.param(item_id)
      }
    }, { 
        headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }},
    ).then( response => {
      dispatch(successDeleteItemBasket(response.data))
    }).catch(error => {dispatch(failureDeleteItemBasket(error.message))});
  }
}

export const deleteItemToBasket = (item_id) => {
  return (dispatch, getState) => {
    dispatch(requestDeleteItemBasket())
    if (getState().error) {
      return dispatch(clearError())
    }
    return dispatch(deleteItem(item_id))
  }
}


