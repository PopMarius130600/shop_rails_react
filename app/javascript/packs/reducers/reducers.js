import { combineReducers } from 'redux';
import { category } from './category';
import { sub_category } from './sub_category';
import { item } from './item';
import error from './error';

export default combineReducers({
  category: category,
  sub_category: sub_category,
  item: item,
  error: error
});