import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../actions/actionTypes'

const initialCategoryState = {
  categories: [],
  isFetchingCategorys: true
}

export const category = (state = initialCategoryState, action) => {
	switch(action.type) {
		
		case REQUEST_CATEGORIES:
			return {...state, isFetchingCategorys: true};
    case RECEIVE_CATEGORIES:
      const nextState = {...state}
      action.categories.map((category) => {
        nextState.categories[category.id] = category
      });
      return {...nextState, isFetchingCategorys: false}

		default: 
			return state;
	}
}