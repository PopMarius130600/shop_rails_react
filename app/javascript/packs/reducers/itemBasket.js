import { REQUEST_ITEMS_BASKET, RECEIVE_ITEMS_BASKET } from '../actions/actionTypes'

const initialItemsBasketState = {
  itemsBasket: [],
  isFetchingItemsBasket: true
}

export const basket = (state = initialItemsBasketState, action) => {
	switch(action.type) {
		
		case REQUEST_ITEMS_BASKET:
			return {...state, isFetchingItemsBasket: true};
    case RECEIVE_ITEMS_BASKET:
			console.log(action.itemsBasket)
      return {...state, itemsBasket: action.itemsBasket, isFetchingItemsBasket: false}
			
		default: 
			return state;
	}
}