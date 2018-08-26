import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import rootReducer from "./reducer/index";
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import setAuthorizationHeader from './utils/setAuthorizationHeader';
import { userFetched, fetchCurrentUser } from './actions/users';
import { userLoggedIn } from './actions/auth';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



if (localStorage.bookwormJWT) {
    const user = {token:localStorage.bookwormJWT};
    setAuthorizationHeader(localStorage.bookwormJWT);
    store.dispatch(userLoggedIn(user));
} else {
    store.dispatch(userFetched({}));
}



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
