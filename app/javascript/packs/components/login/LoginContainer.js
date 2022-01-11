import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/logins';

import Login from './LogIn'
import ErrorComponent from '../error/ErrorComponent'
import Spinner from '../spinner/Spinner';

class LoginContainer extends React.Component {

  render() {
    const { error } = this.props
    if (error) {
			return <ErrorComponent errorMessage={error} handleError={this.props.fetchNameListIfNeeded}/>
		}
    return  <Login {...this.props} />
  }
}

const mapStateToProps = (store) => {
    const { user, loggedIn, loggingIn } = store.login;
    const { error } = store;
    return {
      user: user,
      loggedIn: loggedIn,
      loggingIn: loggingIn,
      error: error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: user => {
      dispatch(fetchUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)