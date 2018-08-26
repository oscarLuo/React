import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <h1>Home Page</h1>
        {this.props.isAuthenticated ? <button onClick={()=>this.props.logout()}>Logout</button> : <div><Link to='/login'>Login</Link> or <Link to='/signup'>Signup</Link>></div> }
      </div>
    );
  }
}

HomePage.propTypes = {
  isAuthenticated : propTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated : !!state.user.token
  }
}
export default connect(mapStateToProps, {logout})(HomePage);
