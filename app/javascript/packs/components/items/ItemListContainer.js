import React from 'react';
import { connect } from 'react-redux';

import { fetchItemListIfNeeded } from '../../actions/items';

import ItemList from './ItemList'


class ItemListContainer extends React.Component {
  
  render() {
    return  <ItemList {...this.props} />
  }
}

const mapStateToProps = (store) => {
    const { items, isFetchingItems } = store.item;
    const { error } = store;
    return {
      items: items,
      isFetchingItems: isFetchingItems,
      error: error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: params => {
      dispatch(fetchItemListIfNeeded(params))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer)