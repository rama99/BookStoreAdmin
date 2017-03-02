import { Action } from '@ngrx/store';
import { AuthorModel } from './author-model';
import { BookCategoryAuthorModel } from '../book/book-model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

// Action Types
export const AuthorActionTypes = {

    LOAD_AUTHORS: 'LOAD_AUTHORS',
    ADD_AUTHOR: 'ADD_AUTHOR',
    EDIT_AUTHOR: 'EDIT_AUTHOR',
    LOAD_AUTHORS_SUCCESS: 'LOAD_AUTHORS_SUCCESS',
    ADD_AUTHOR_SUCCESS: 'ADD_AUTHOR_SUCCESS',
    LOAD_ALL: 'LOAD_ALL',
    LOAD_ALL_SUCCESS:'LOAD_ALL_SUCCESS'
}

// Actions
export function loadAuthors():Action {
    return {
        type: AuthorActionTypes.LOAD_AUTHORS,
        payload:{}
    }
}

export function loadAuthorsSuccess(authors: AuthorModel[]): Action {
   
    return {
        type: AuthorActionTypes.LOAD_AUTHORS_SUCCESS,
        payload:authors
    }
}

export function addAuthor(author:AuthorModel): Action {
    return {
        type: AuthorActionTypes.ADD_AUTHOR,
        payload: author
    }
}

export function addAuthorSuccess(author: AuthorModel): Action {

    console.log('1');

    return {
        type: AuthorActionTypes.ADD_AUTHOR_SUCCESS,
        payload: author
    }
}

/*export function loadAllSuccess(all: BookCategoryAuthorModel): Action {
    return {
        type: AuthorActionTypes.LOAD_ALL_SUCCESS,
        payload: all.books
    }
}*/