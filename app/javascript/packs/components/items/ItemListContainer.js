import React from 'react';
import { connect } from 'react-redux';

import { fetchItemListIfNeeded } from '../../actions/items';

import ItemList from './ItemList'
import FilterItems from './FilterItems'

import { Row } from 'react-bootstrap';
import styles from './item.module.css';

class ItemListContainer extends React.Component {
  
  render() {
    return (
      <div className={styles.div}>
        <Row>
          <FilterItems {...this.props} />
          <ItemList {...this.props} />
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
    const { items, isFetchingItems } = store.item.items;
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