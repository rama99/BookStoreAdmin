import { Action } from '@ngrx/store';
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
    LOAD_ALL_SUCCESS: 'LOAD_ALL_SUCCESS',

    SERVER_ERROR_CATEGORY: 'SERVER_ERROR_CATEGORY'
}

export class CategoryActions {

// actions
static loadCatgories(): Action {

    $.blockUI();
    return {
        type: CategoryActionTypes.LOAD_CATEGORIES,
        payload: {}
    }
}

static loadCategoriesSuccess(categories: CategoryModel[]): Action {   
    $.unblockUI();
    return {
        type: CategoryActionTypes.LOAD_CATEGORIES_SUCCESS,
        payload: categories
    }
}

static addCategory(category: CategoryModel): Action {

    $.blockUI();
    return {
        type: CategoryActionTypes.ADD_CATEGORY,
        payload: category
    }
}


static addCategorySuccess(data: any): Action {
    $.unblockUI();
    return {
        type: CategoryActionTypes.ADD_CATEGORY_SUCCESS,
        payload: data.data
    }
}

static editCategory(category: CategoryModel): Action {

    $.blockUI();
    return {
        type: CategoryActionTypes.EDIT_CATEGORY,
        payload: category
    }
}

static editCatgorySuccess(data: any): Action {
    $.unblockUI();
    return {
        type: CategoryActionTypes.EDIT_CATEGORY_SUCCESS,
        payload: data.data
    }
}

static validationErrorCategory(data: any): Action {

    return {
        type: CategoryActionTypes.VALIDATION_ERROR_CATEGORY,
        payload:data
    }
}

static serverErrorCategory(): Action {
        $.unblockUI();
        return {
            type: CategoryActionTypes.SERVER_ERROR_CATEGORY,
            payload: {}
        }

}

}