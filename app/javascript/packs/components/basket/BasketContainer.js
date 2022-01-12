import React from 'react';
import { connect } from 'react-redux';

import { fetchItemsBasketIfNeeded } from '../../actions/itemsBasket';
import { addItemToBasket, removeItemToBasket, deleteItemToBasket} from '../../actions/listBasket';

import Basket from './Basket'
import ErrorComponent from '../error/ErrorComponent'
import Spinner from '../spinner/Spinner';

class BasketContainer extends React.Component {
  componentDidMount() {
    this.props.getItemsBasket();
  }

  render() {
    const { error, isFetchingItemsBasket } = this.props
    if (error) {
			return <ErrorComponent errorMessage={error} handleError={this.props.fetchNameListIfNeeded}/>
		}
		if (isFetchingItemsBasket) {
			return <Spinner />
		} 
    return  <Basket {...this.props} />
  }

}

const mapStateToProps = (store) => {
    const { itemsBasket, isFetchingItemsBasket } = store.basket;
    const { loggingIn } = store.login;
    const { error } = store;
    return {
      itemsBasket: itemsBasket,
      isFetchingItemsBasket: isFetchingItemsBasket,
      loggingIn: loggingIn,
      error: error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItemsBasket: () => {
      dispatch(fetchItemsBasketIfNeeded())
    },
    addItemToBasket: id => {
      dispatch(addItemToBasket(id))
    },
    removeItemToBasket: id => {
      dispatch(removeItemToBasket(id))
    },
    deleteItemToBasket: id => {
      dispatch(deleteItemToBasket(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer)