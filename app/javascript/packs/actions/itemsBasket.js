import { REQUEST_ITEMS_BASKET, RECEIVE_ITEMS_BASKET, RECEIVE_ITEMS_BASKET_ERROR, 
  CLEAR_ERROR } from './actionTypes';
  
import axios from 'axios';

const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}

const requestItemsBasket = () => {
  return {
    type: REQUEST_ITEMS_BASKET
  }
}

const receiveItemsBasket = (itemsBasket) => {
  return {
    type: RECEIVE_ITEMS_BASKET,
    itemsBasket: itemsBasket
  }
}

const receiveItemsBasketError = (error) => {
  return {
    type: RECEIVE_ITEMS_BASKET_ERROR,
    error: error
  }
}

const getItemsBasket = () => {
  return (dispatch) => {
    axios.get("/api/v1/basket").then( response => {
      dispatch(receiveItemsBasket(response.data))
    }).catch(error => {dispatch(receiveItemsBasketError(error.message))});
  }
}

const fetchItemsBasket = () => {
  return (dispatch, getState) => {
		dispatch(requestItemsBasket())
		if (getState().error) {
			return dispatch(clearError())
		}

    return dispatch(getItemsBasket())
	}
}

export const fetchItemsBasketIfNeeded = () => {
	return (dispatch, getState) => {
    return dispatch(fetchItemsBasket())
	}
}

