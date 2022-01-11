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
      dispatch(receiveCategories(response.data))
    }).catch(error => {dispatch(receiveCategoriesError(error.message))});
  }
}

const fetchCategoryList = () => {
return (dispatch, getState) => {
dispatch(requestCategories())
if (getState().error) {
return dispatch(clearError())
}

return dispatch(getCategories())
}
}

const shouldFetchCategories = (state) => {
const {categories} = state.category;
if (!categories.length) {
return true;
} else {
return false;
}
}

export const fetchCategoryListIfNeeded = () => {
return (dispatch, getState) => {
if (shouldFetchCategories(getState())) {
return dispatch(fetchCategoryList())
} else {
return Promise.resolve()
}
}
}

