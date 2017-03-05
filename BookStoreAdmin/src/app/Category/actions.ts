﻿import { Action } from '@ngrx/store';
import { CategoryModel } from './category-model';
import { BookCategoryAuthorModel } from '../book/book-model';

// type of actions
export const CategoryActionTypes = {
    LOAD_CATEGORIES: 'LOAD_CATEGORIES',
    LOAD_CATEGORIES_SUCCESS: 'LOAD_CATEGORIES_SUCCESS',
    ADD_CATEGORY: 'ADD_CATEGORY',
    ADD_CATEGORY_SUCCESS: 'ADD_CATEGORY_SUCCESS',

    EDIT_CATEGORY: 'EDIT_CATEGORY',
    EDIT_CATEGORY_SUCCESS: 'EDIT_CATEGORY_SUCCESS',
    EDIT_CATEGORY_ERROR: 'EDIT_CATEGORY_ERROR',

    VALIDATION_ERROR_CATEGORY: 'VALIDATION_ERROR_CATEGORY', 

    LOAD_ALL: 'LOAD_ALL',
    LOAD_ALL_SUCCESS: 'LOAD_ALL_SUCCESS'
}

// actions
export function loadCatgories(): Action {

    $.blockUI();
    return {
        type: CategoryActionTypes.LOAD_CATEGORIES,
        payload: {}
    }
}

export function loadCategoriesSuccess(categories: CategoryModel[]): Action {   
    $.unblockUI();
    return {
        type: CategoryActionTypes.LOAD_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export function addCategory(category: CategoryModel): Action {

    $.blockUI();
    return {
        type: CategoryActionTypes.ADD_CATEGORY,
        payload: category
    }
}


export function addCategorySuccess(data: any): Action {
    $.unblockUI();
    return {
        type: CategoryActionTypes.ADD_CATEGORY_SUCCESS,
        payload: data.data
    }
}

export function editCategory(category: CategoryModel): Action {

    $.blockUI();
    return {
        type: CategoryActionTypes.EDIT_CATEGORY,
        payload: category
    }
}

export function editCatgorySuccess(data: any): Action {
    $.unblockUI();
    return {
        type: CategoryActionTypes.EDIT_CATEGORY_SUCCESS,
        payload: data.data
    }
}

export function validationErrorCategory(data: any): Action {

    return {
        type: CategoryActionTypes.VALIDATION_ERROR_CATEGORY,
        payload:data
    }
}