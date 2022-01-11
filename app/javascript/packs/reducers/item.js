import { REQUEST_ITEMS, RECEIVE_ITEMS, REQUEST_ITEM, RECEIVE_ITEM } from '../actions/actionTypes'
import { combineReducers } from 'redux';

const initialItemsState = {
  items: [],
  isFetchingItems: true
}

const initialItemProfileState = {
	item: {},
	isFetchingItem: true
}

const itemList = (state = initialItemsState, action) => {
	switch(action.type) {
		
		case REQUEST_ITEMS:
			return {...state, isFetchingItems: true};
    case RECEIVE_ITEMS:
      return {...state, items: action.items, isFetchingItems: false}

		default: 
			return state;
	}
}

const itemProfile = (state = initialItemProfileState, action) => {
	switch(action.type) {
		
		case REQUEST_ITEM:
			return {...state, isFetchingItem: true};
    case RECEIVE_ITEM:
      return {...state, item: action.item, isFetchingItem: false}

		default: 
			return state;
	}
}

const item = combineReducers({
	items: itemList,
	itemProfile: itemProfile
})

export default item;