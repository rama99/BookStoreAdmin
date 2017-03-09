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

            return Object.assign({}, state, { categories: action.payload.data }); 
           
        case CategoryActionTypes.LOAD_ALL_SUCCESS:
        
            return Object.assign({}, state, { categories: action.payload.data.categories });

        case CategoryActionTypes.ADD_CATEGORY_SUCCESS:

            return Object.assign({}, state, { categories: state.categories.concat(action.payload) });
            
        case CategoryActionTypes.EDIT_CATEGORY_SUCCESS:

            return Object.assign({}, state, {
                categories: state.categories.map(category => {

                    if (category.id != action.payload.id) {                       
                        return category;
                    }
                    else {                        
                        return action.payload;
                    }
                })
            });
        case CategoryActionTypes.VALIDATION_ERROR_CATEGORY:
            return Object.assign({}, state, { errors: action.payload });
          
        default: return state;   
    }
}