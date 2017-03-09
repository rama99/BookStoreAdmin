import { Action } from '@ngrx/store';
import { AuthorModel } from './author-model';
import { BookCategoryAuthorModel } from '../book/book-model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

// Action Types
export const AuthorActionTypes = {

    LOAD_AUTHORS: 'LOAD_AUTHORS',
    LOAD_AUTHORS_SUCCESS: 'LOAD_AUTHORS_SUCCESS',
    LOAD_AUTHORS_ERROR: 'LOAD_AUTHORS_ERROR',

    ADD_AUTHOR: 'ADD_AUTHOR',
    ADD_AUTHOR_SUCCESS: 'ADD_AUTHOR_SUCCESS',
    ADD_AUTHOR_ERROR:'ADD_AUTHOR_ERROR',

    EDIT_AUTHOR: 'EDIT_AUTHOR',
    EDIT_AUTHOR_SUCCESS: 'EDIT_AUTHOR_SUCCESS',
    EDIT_AUTHOR_ERROR: 'EDIT_AUTHOR_ERROR',

    VALIDATION_ERROR_AUTHOR: 'VALIDATION_ERROR_AUTHOR',    
    
    LOAD_ALL: 'LOAD_ALL',
    LOAD_ALL_SUCCESS: 'LOAD_ALL_SUCCESS',
    LOAD_ALL_ERROR: 'LOAD_ALL_ERROR'
}

export class AuthorActions {

    constructor() {        
    }

// Actions
static loadAuthors(): Action {
    $.blockUI();
    return {
        type: AuthorActionTypes.LOAD_AUTHORS,
        payload:{}
    }
}
static loadAuthorsSuccess(authors: AuthorModel[]): Action {
    $.unblockUI();
    return {
        type: AuthorActionTypes.LOAD_AUTHORS_SUCCESS,
        payload:authors
    }
}

static loadAuthorsError(errors: string[]): Action {

    return {
        type: AuthorActionTypes.LOAD_AUTHORS_ERROR,
        payload:errors
    }
}

static addAuthor(author: AuthorModel): Action {

    $.blockUI();
    return {
        type: AuthorActionTypes.ADD_AUTHOR,
        payload: author
    }
}

static addAuthorSuccess(data: any): Action {    
    $.unblockUI();
    return {
        type: AuthorActionTypes.ADD_AUTHOR_SUCCESS,
        payload: data.data
    }
}

static editAuthor(author: AuthorModel): Action {
    $.blockUI();
    return {
        type: AuthorActionTypes.EDIT_AUTHOR,
        payload:author
    }
}

static editAuthorSuccess(data: any): Action {
    $.unblockUI();
    return {
        type: AuthorActionTypes.EDIT_AUTHOR_SUCCESS,
        payload:data.data
    }
}

static validationErrorAuthor(data: any): Action {

    return {
        type: AuthorActionTypes.VALIDATION_ERROR_AUTHOR,
        payload:data
    }
}

}

