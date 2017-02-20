﻿import { Action } from '@ngrx/store';
import { AuthorModel } from './author-model';

// Action Types
export const AuthorActionTypes = {

    LOAD_AUTHORS: 'LOAD_AUTHORS',
    ADD_AUTHOR: 'ADD_AUTHOR',
    EDIT_AUTHOR: 'EDIT_AUTHOR',
    LOAD_AUTHORS_SUCCESS: 'LOAD_AUTHORS_SUCCESS',
    ADD_AUTHOR_SUCCESS: 'ADD_AUTHOR_SUCCESS',
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
    return {
        type: AuthorActionTypes.ADD_AUTHOR_SUCCESS,
        payload: author
    }
}