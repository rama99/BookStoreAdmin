import { Action } from '@ngrx/store';
import { CategoryActionTypes } from './actions';

import { CategoryModel } from './category-model';

interface State {
    currentPage: number;
    categories: CategoryModel[];
}

const initialState: State = {
    currentPage: 0,
    categories:[]
}

export function reducer(state:State = initialState, action: Action):State {

    switch (action.type) {

       /* case CategoryActionTypes.LOAD_CATEGORIES:
            return state; */
        case CategoryActionTypes.LOAD_CATEGORIES_SUCCESS:           
            return {
            currentPage: 0,
            categories: action.payload
            }
        case CategoryActionTypes.LOAD_ALL_SUCCESS:

            alert(' category LOAD_ALL_SUCCESS');
            return {
                currentPage: state.currentPage,
                categories: action.payload.categories
            }
        case CategoryActionTypes.ADD_CATEGORY_SUCCESS: return {
            currentPage: state.currentPage,
            categories: state.categories.concat(action.payload)
        }
        default: return state;   
    }
}