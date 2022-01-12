import React from 'react';
import { connect } from 'react-redux';

import { fetchCategoryListIfNeeded } from '../../actions/categories';
import { fetchSubCategoryListIfNeeded } from '../../actions/sub_categories';
import { logoutUser } from '../../actions/logins';

import Header from './Header'
import ErrorComponent from '../error/ErrorComponent'
import Spinner from '../spinner/Spinner';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { error, isFetchingCategories, isFetchingSubCategories } = this.props
    if (error) {
			return <ErrorComponent errorMessage={error} handleError={this.props.fetchNameListIfNeeded}/>
		}
		if (isFetchingCategories || isFetchingSubCategories) {
			return <Spinner />
		} 
    return  <Header {...this.props} />
  }

}

const mapStateToProps = (store) => {
    const { categories, isFetchingCategories } = store.category;
    const { subCategories, isFetchingSubCategories } = store.sub_category;
    const { loggingIn } = store.login;
    const { error } = store;
    return {
      categories: categories,
      subCategories: subCategories,
      isFetchingCategories: isFetchingCategories,
      isFetchingSubCategories: isFetchingSubCategories,
      loggingIn: loggingIn,
      error: error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => {
      dispatch(fetchCategoryListIfNeeded())
      dispatch(fetchSubCategoryListIfNeeded())
    },
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)