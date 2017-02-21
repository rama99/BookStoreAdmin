import { Action } from '@ngrx/store';
import { BookModel } from './book-model';

// type of actions
export const BookActionTypes = {

    LOAD_BOOKS: 'LOAD_BOOKS',
    LOAD_BOOKS_SUCCESS: 'LOAD_BOOKS_SUCCESS',
    ADD_BOOK: 'ADD_BOOK',
    ADD_BOOK_SUCCESS:'ADD_BOOK_SUCCESS'
}

export function loadBooks(): Action {   

    return {
        type: BookActionTypes.LOAD_BOOKS,
        payload: {}
    }
}

export function loadBooksSuccess(books:BookModel[]): Action {
    
    return {
        type: BookActionTypes.LOAD_BOOKS_SUCCESS,
        payload:books
    }
}

export function addBook(book: BookModel): Action {

    return {
        type: BookActionTypes.ADD_BOOK,
        payload:book
    }

}

export function addBookSuccess(book: BookModel): Action {

    return {
        type: BookActionTypes.ADD_BOOK_SUCCESS,
        payload:book
    }
}