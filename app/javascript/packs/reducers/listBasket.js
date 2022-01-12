import React from 'react';
import { REQUEST_ADD_ITEM_BASKET, SUCCESS_ADD_ITEM_BASKET,
  REQUEST_REMOVE_ITEM_BASKET, SUCCESS_REMOVE_ITEM_BASKET,
  REQUEST_DELETE_ITEM_BASKET, SUCCESS_DELETE_ITEM_BASKET} from '../actions/actionTypes'

const initialState = {
  item: {},
  isFetchingItemAddToBasket: true,
  isFetchingItemRemoveToBasket: true,
  isFetchingItemDeleteToBasket: true,
};

export function listBasket (state = initialState, action) {
  switch (action.type) {
    case REQUEST_ADD_ITEM_BASKET:
      return {...state, isFetchingItemAddToBasket: true};
    case SUCCESS_ADD_ITEM_BASKET:
      return {...state, item: action.item, isFetchingItemAddToBasket: false};
    
    case REQUEST_REMOVE_ITEM_BASKET:
      return {...state, isFetchingItemAddToBasket: true};
    case SUCCESS_REMOVE_ITEM_BASKET:
      return {...state, isFetchingItemAddToBasket: false};

    case REQUEST_DELETE_ITEM_BASKET:
      return {...state, isFetchingItemDeleteToBasket: true};
    case SUCCESS_DELETE_ITEM_BASKET:
      return {...state, isFetchingItemDeleteToBasket: false};

    default:
      return state
  }
}