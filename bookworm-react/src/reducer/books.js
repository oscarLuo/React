import { createSelector } from 'reselect';
import { BOOKS_FETCHED, BOOK_CREATED } from "../types/types";
export default function books(state = {}, actions={}) {
    switch (actions.type) {
        case BOOKS_FETCHED :
            return {...state, ...actions.data.entities.books};
        case BOOK_CREATED :
            return {...state, ...actions.data.entities.books};
        default: return state;
    }
}

//SELECTORS
export const bookSelector = state => state.books;
export const allBooksSelector = createSelector(bookSelector, bookHash => Object.keys(bookHash).map(function(key) {
    return bookHash[key];
}));