import { REQUEST_SUB_CATEGORIES, RECEIVE_SUB_CATEGORIES } from '../actions/actionTypes'

const initialSubCategoryState = {
  subCategories: [],
  isFetchingSubCategories: true
}

export const sub_category = (state = initialSubCategoryState, action) => {
	switch(action.type) {
		
		case REQUEST_SUB_CATEGORIES:
			return {...state, isFetchingSubCategories: true};
    case RECEIVE_SUB_CATEGORIES:
      const nextState = {...state}
      action.subCategories.map((subCategories) => {
        nextState.subCategories[subCategories.id] = subCategories
      });
      return {...nextState, isFetchingSubCategories: false}

		default: 
			return state;
	}
}