import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from './component/pages/HomePage';
import LoginPage from './component/pages/LoginPage'
class App extends Component {
  render() {
    return (
      <div className="App ui container">
        <Route path='/' exact component={HomePage}/>
        <Route path='/Login' exact component={LoginPage}/>
      </div>
    );
  }
}

export default App;
