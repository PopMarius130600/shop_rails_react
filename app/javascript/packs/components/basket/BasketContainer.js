import React from 'react';
import { connect } from 'react-redux';

import { fetchItemsBasketIfNeeded } from '../../actions/itemsBasket';

import Basket from './Basket'
import ErrorComponent from '../error/ErrorComponent'
import Spinner from '../spinner/Spinner';

class BasketContainer extends React.Component {
  componentDidMount() {
    console.log("HEI")
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer)