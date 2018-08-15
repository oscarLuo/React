import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from './component/pages/HomePage';
import LoginPage from './component/pages/LoginPage';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducer/index";
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <Provider store={store}>
          <div className="App ui container">
            <Route path='/' exact component={HomePage}/>
            <Route path='/Login' exact component={LoginPage}/>
          </div>
        </Provider>
    </BrowserRouter>
    );
  }
}

export default App;
