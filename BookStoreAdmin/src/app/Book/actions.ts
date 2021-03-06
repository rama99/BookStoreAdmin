﻿import { Action } from '@ngrx/store';
import { BookModel , BookCategoryAuthorModel } from './book-model';

// type of actions
export const BookActionTypes = {

    LOAD_BOOKS: 'LOAD_BOOKS',
    LOAD_BOOKS_SUCCESS: 'LOAD_BOOKS_SUCCESS',

    LOAD_BOOKS_AUTHORS_CATEGORIES: 'LOAD_BOOKS_AUTHORS_CATEGORIES',
    LOAD_BOOKS_AUTHORS_CATEGORIES_SUCCESS: 'LOAD_BOOKS_AUTHORS_CATEGORIES_SUCCESS',

    ADD_BOOK: 'ADD_BOOK',
    ADD_BOOK_SUCCESS: 'ADD_BOOK_SUCCESS',

    VALIDATION_ERROR_BOOK: 'VALIDATION_ERROR_BOOK', 

    EDIT_BOOK: 'EDIT_BOOK',
    EDIT_BOOK_SUCCESS: 'EDIT_BOOK_SUCCESS',
    EDIT_BOOK_ERROR: 'EDIT_BOOK_ERROR',

    LOAD_ALL: 'LOAD_ALL',
    LOAD_ALL_SUCCESS: 'LOAD_ALL_SUCCESS',

    SERVER_ERROR_BOOK: 'SERVER_ERROR_BOOK'
}

export class BooksActions {

static loadBooks(): Action {   
    $.blockUI();
    return {
        type: BookActionTypes.LOAD_BOOKS,
        payload: {}
    }
}

static loadBooksSuccess(books:BookModel[]): Action {
    $.unblockUI();
    return {
        type: BookActionTypes.LOAD_BOOKS_SUCCESS,
        payload:books
    }
}

static loadBookAuthorCategory(): Action {
    $.blockUI();
    return {
        type: BookActionTypes.LOAD_BOOKS_AUTHORS_CATEGORIES,
        payload: {}
    }
}

static loadBookAuthorCategorySuccess(data: any): Action {
    $.unblockUI();
    return {
        type: BookActionTypes.LOAD_BOOKS_AUTHORS_CATEGORIES_SUCCESS,
        payload:data.data
    }

}

static addBook(book: BookModel): Action {
    $.blockUI();
    return {
        type: BookActionTypes.ADD_BOOK,
        payload:book
    }

}

static addBookSuccess(data: any): Action {
    $.unblockUI();
    return {
        type: BookActionTypes.ADD_BOOK_SUCCESS,
        payload:data.data
    }
}

static editBook(book: BookModel): Action {
    $.blockUI();
    return {
        type: BookActionTypes.EDIT_BOOK,
        payload: book
    };
}

static editBookSuccess(data: any): Action {
    $.unblockUI();
    return {
        type: BookActionTypes.EDIT_BOOK_SUCCESS,
        payload: data.data
    }
}

static loadAllSuccess(all: BookCategoryAuthorModel): Action {
    $.unblockUI();
    return {
        type: BookActionTypes.LOAD_ALL_SUCCESS,
        payload:all
    }
}

static validationErrorBook(data: any): Action {

    return {
        type: BookActionTypes.VALIDATION_ERROR_BOOK,
        payload: data
    }
}

static serverErrorBook(): Action {
    $.unblockUI();
    return {
        type: BookActionTypes.SERVER_ERROR_BOOK,
        payload: {}
    }
}

}