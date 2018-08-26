import {combineReducers} from 'redux';
import user from './userReducer';
import books from './books';
export default combineReducers({
    user,
    books
})