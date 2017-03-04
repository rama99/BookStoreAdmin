import { Action } from '@ngrx/store';
import { CategoryActionTypes } from './actions';

import { CategoryModel } from './category-model';

interface State {
    currentPage: number;   
    categories: CategoryModel[];
    errors: string[];
}

const initialState: State = {
    currentPage: 0,   
    categories: [],
    errors: []
}

export function reducer(state:State = initialState, action: Action):State {

    switch (action.type) {
       
        case CategoryActionTypes.LOAD_CATEGORIES_SUCCESS:           
            return {
            currentPage: 0,
            categories: action.payload.data,
            errors:[]
            }

           
        case CategoryActionTypes.LOAD_ALL_SUCCESS:
        
            return Object.assign({}, state, { categories: action.payload.data.categories });
        case CategoryActionTypes.ADD_CATEGORY_SUCCESS:

            return {
            currentPage: state.currentPage,
            categories: state.categories.concat(action.payload),
            errors:[]
            }
        case CategoryActionTypes.EDIT_CATEGORY_SUCCESS:
            return state;
        default: return state;   
    }
}