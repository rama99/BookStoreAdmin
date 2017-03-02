import { Action } from '@ngrx/store';
import { BookModel , BookCategoryAuthorModel } from './book-model';

// type of actions
export const BookActionTypes = {

    LOAD_BOOKS: 'LOAD_BOOKS',
    LOAD_BOOKS_SUCCESS: 'LOAD_BOOKS_SUCCESS',

    LOAD_BOOKS_AUTHORS_CATEGORIES: 'LOAD_BOOKS_AUTHORS_CATEGORIES',
    LOAD_BOOKS_AUTHORS_CATEGORIES_SUCCESS: 'LOAD_BOOKS_AUTHORS_CATEGORIES_SUCCESS',

    ADD_BOOK: 'ADD_BOOK',
    ADD_BOOK_SUCCESS: 'ADD_BOOK_SUCCESS',

    LOAD_ALL: 'LOAD_ALL',
    LOAD_ALL_SUCCESS: 'LOAD_ALL_SUCCESS'
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

export function loadBookAuthorCategory(): Action {

    return {
        type: BookActionTypes.LOAD_BOOKS_AUTHORS_CATEGORIES,
        payload: {}
    }
}

export function loadBookAuthorCategorySuccess(data: any): Action {

    return {
        type: BookActionTypes.LOAD_BOOKS_AUTHORS_CATEGORIES_SUCCESS,
        payload:data.data
    }

}

export function addBook(book: BookModel): Action {

    return {
        type: BookActionTypes.ADD_BOOK,
        payload:book
    }

}

export function addBookSuccess(data: any): Action {

    return {
        type: BookActionTypes.ADD_BOOK_SUCCESS,
        payload:data.data
    }
}

export function loadAllSuccess(all: BookCategoryAuthorModel): Action {

    return {
        type: BookActionTypes.LOAD_ALL_SUCCESS,
        payload:all
    }

}