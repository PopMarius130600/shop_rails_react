import { combineReducers } from 'redux';
import { category } from './category';
import { sub_category } from './sub_category';
import item from './item';
import { login } from './login';
import { signup } from './signup';
import { basket } from './itemBasket';
import { listBasket } from './listBasket';
import error from './error';

export default combineReducers({
  category: category,
  sub_category: sub_category,
  item: item,
  login: login,
  basket: basket,
  listBasket: listBasket,
  signup: signup,
  error: error
});