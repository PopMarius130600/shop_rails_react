import { REQUEST_ITEMS, RECEIVE_ITEMS } from '../actions/actionTypes'

const initialItemsState = {
  items: [],
  isFetchingItems: true
}

export const item = (state = initialItemsState, action) => {
	switch(action.type) {
		
		case REQUEST_ITEMS:
			return {...state, isFetchingItems: true};
    case RECEIVE_ITEMS:
      return {...state, items: action.items, isFetchingItems: false}

		default: 
			return state;
	}
}