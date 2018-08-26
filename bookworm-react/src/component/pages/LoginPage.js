//使用rcc 快捷键，一键创建react class template 文件, rfc 创建function react template文件
import React, { Component } from 'react';
import LoginForms from '../forms/LoginForms';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
class LoginPage extends Component {
  submit = data => 
    this.props.login(data).then(() => {
      this.props.history.push('/dashboard');
    })
  render() {
    return (
      <div className="LoginPage">
        <h1>Login Page</h1>
        <LoginForms submit={this.submit}/>
      </div>
    );
  }
}
LoginPage.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired
  }),
  login: propTypes.func.isRequired
}
export default connect(null,{login})(LoginPage);
