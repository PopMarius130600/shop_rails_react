import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES, RECEIVE_CATEGORIES_ERROR, 
        CLEAR_ERROR } from './actionTypes';
        
import axios from 'axios';

const clearError = () => {
	return {
		type: CLEAR_ERROR
	}
}

const requestCategories = () => {
	return {
		type: REQUEST_CATEGORIES
	}
}

const receiveCategories = (categories) => {
	return {
		type: RECEIVE_CATEGORIES,
		categories: categories
	}
}

const receiveCategoriesError = (error) => {
	return {
		type: RECEIVE_CATEGORIES_ERROR,
		error: error
	}
}

const getCategories = () => {
  return (dispatch) => {
    axios.get("/api/v1/categorys").then( response => {
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

