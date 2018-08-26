import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Loader from 'react-loader';

import HomePage from './component/pages/HomePage';
import LoginPage from './component/pages/LoginPage';
import SignupPage from './component/pages/SignupPage';
import DashboardPage from './component/pages/DashboardPage';
import NewBookPage from './component/pages/NewBookPage';

import UserRoute from './component/routes/UserRoute';
import GuestRoute from './component/routes/GuestRoute';
import TopNavigation from './component/navigation/TopNavigation';

import { fetchCurrentUser } from './actions/users';


class App extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) this.props.fetchCurrentUser();
  }
  render() {
    const { loaded } = this.props;
    return (
    <div className="App ui container">
      <Loader loaded={loaded}>
        { this.props.isAuthenticated && <TopNavigation /> }
        <Route 
          location={this.props.location} 
          path='/' 
          exact 
          component={HomePage}/>
        <GuestRoute 
          location={this.props.location} 
          path='/login' 
          exact 
          component={LoginPage}/>
        <GuestRoute 
          location={this.props.location} 
          path='/signup' 
          exact 
          component={SignupPage}/>
        <UserRoute 
          location={this.props.location} 
          path='/dashboard' 
          exact 
          component={DashboardPage}/>
        <UserRoute 
          location={this.props.location} 
          path='/books/new' 
          exact 
          component={NewBookPage}/>
      </Loader>
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated : !!state.user.token,
    loaded: state.user.loaded
  }
}
export default connect(mapStateToProps, { fetchCurrentUser })(App);
