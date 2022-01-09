import { REQUEST_SUB_CATEGORIES, RECEIVE_SUB_CATEGORIES, RECEIVE_SUB_CATEGORIES_ERROR, 
  CLEAR_ERROR } from './actionTypes';
  
import axios from 'axios';

const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}

const requestSubCategories = () => {
  return {
    type: REQUEST_SUB_CATEGORIES
  }
}

const receiveSubCategories = (subCategories) => {
  return {
    type: RECEIVE_SUB_CATEGORIES,
    subCategories: subCategories
  }
}

const receiveSubCategoriesError = (error) => {
  return {
    type: RECEIVE_SUB_CATEGORIES_ERROR,
    error: error
  }
}

const geSubCategories = () => {
  return (dispatch) => {
    axios.get("/api/v1/sub_categorys").then( response => {
      dispatch(receiveSubCategories(response.data))
    }).catch(error => {dispatch(receiveSubCategoriesError(error.message))});
  }
}

const fetchSubCategoryList = () => {
  return (dispatch, getState) => {
    dispatch(requestSubCategories())
    
    if (getState().error) {
      return dispatch(clearError())
    }
    return dispatch(geSubCategories())
  }
}

const shouldFetchSubCategories = (state) => {
  const {subCategories} = state.sub_category;
  if (!subCategories.length) {
    return true;
  } else {
    return false;
  }
}

export const fetchSubCategoryListIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchSubCategories(getState())) {
      return dispatch(fetchSubCategoryList())
    } else {
      return Promise.resolve()
    }
  }
}

