import { Action } from '@ngrx/store';
import { CategoryModel } from './category-model';
import { BookCategoryAuthorModel } from '../book/book-model';

// type of actions
export const CategoryActionTypes = {
    LOAD_CATEGORIES: 'LOAD_CATEGORIES',
    LOAD_CATEGORIES_SUCCESS: 'LOAD_CATEGORIES_SUCCESS',
    ADD_CATEGORY: 'ADD_CATEGORY',
    ADD_CATEGORY_SUCCESS: 'ADD_CATEGORY_SUCCESS',

    LOAD_ALL: 'LOAD_ALL',
    LOAD_ALL_SUCCESS: 'LOAD_ALL_SUCCESS'
}

// actions
export function loadCatgories():Action {
    return {
        type: CategoryActionTypes.LOAD_CATEGORIES,
        payload: {}
    }
}

export function loadCategoriesSuccess(categories: CategoryModel[]): Action {   

    return {
        type: CategoryActionTypes.LOAD_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export function addCategory(category: CategoryModel): Action {
    return {
        type: CategoryActionTypes.ADD_CATEGORY,
        payload: category
    }
}


export function addCategorySuccess(category: CategoryModel): Action {

    return {
        type: CategoryActionTypes.ADD_CATEGORY_SUCCESS,
        payload: category
    }
}

/*export function loadAllSuccess(all: BookCategoryAuthorModel): Action {
    return {
        type: CategoryActionTypes.LOAD_ALL_SUCCESS,
        payload: all.categories
    }
}*/