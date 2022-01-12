import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/logins';
import { signupUser } from '../../actions/signup';

import Signup from './Signup'
import ErrorComponent from '../error/ErrorComponent'
import Spinner from '../spinner/Spinner';

class SignupContainer extends React.Component {

  render() {
    console.log(signupUser)
    const { error } = this.props
    if (error) {
			return <ErrorComponent errorMessage={error} handleError={this.props.fetchNameListIfNeeded}/>
		}
    return  <Signup {...this.props} />
  }
}

const mapStateToProps = (store) => {
    const { user, signingUp } = store.signup;
    const { error } = store;
    return {
      user: user,
      signingUp: signingUp,
      error: error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: user => {
      dispatch(fetchUser(user))
    },
    signupUser: user => {
      dispatch(signupUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)