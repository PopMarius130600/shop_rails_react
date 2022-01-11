import React from 'react';
import { connect } from 'react-redux';

import { fetchItemProfileIfNeeded } from '../../actions/item';

import Item from './Item'
import ErrorComponent from '../error/ErrorComponent'
import Spinner from '../spinner/Spinner';

class ItemContainer extends React.Component {

  render() {
    const { error, isFetchingCategories, isFetchingSubCategories } = this.props
    if (error) {
			return <ErrorComponent errorMessage={error} handleError={this.props.fetchNameListIfNeeded}/>
		}
		if (isFetchingCategories || isFetchingSubCategories) {
			return <Spinner />
		} 
    return  <Item {...this.props} />
  }
}

const mapStateToProps = (store) => {
    const { item, isFetchingItem } = store.item.itemProfile;
    const { error } = store;
    return {
      item: item,
      isFetchingItem: isFetchingItem,
      error: error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItem: id => {
      dispatch(fetchItemProfileIfNeeded(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)