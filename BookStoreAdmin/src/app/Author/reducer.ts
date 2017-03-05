import { Action } from '@ngrx/store';
import { AuthorModel } from './author-model';
import { AuthorActionTypes } from './actions';

interface State {
    currentPage: number;
    authors: AuthorModel[];
    errors: string[];
}

const initialState: State = {
    currentPage: 0,
    authors: [],
    errors:[]
}

export function reducer(state: State = initialState, action: Action) {

    switch (action.type) {

        case AuthorActionTypes.LOAD_AUTHORS:           
            return state;      
        case AuthorActionTypes.LOAD_AUTHORS_SUCCESS:            
              return {
                  currentPage: state.currentPage,
                  authors:action.payload.data
            }
        case AuthorActionTypes.LOAD_ALL_SUCCESS: 

            return Object.assign({}, state, { authors: action.payload.data.authors });

        case AuthorActionTypes.LOAD_AUTHORS_ERROR:

            return Object.assign({}, state, {
                errors: action.payload
            });


        case AuthorActionTypes.ADD_AUTHOR_SUCCESS:

            let xx = {
                currentPage: state.currentPage,
                authors: state.authors.concat(action.payload)
            }           
            return xx;
        case AuthorActionTypes.EDIT_AUTHOR_SUCCESS:

            return Object.assign({}, state, {
                authors: state.authors.map(author => {

                    if (author.id != action.payload.id) {                        
                        return author;
                    }
                    else {                        
                        return action.payload
                    }
                })
                    });
        case AuthorActionTypes.VALIDATION_ERROR_AUTHOR:            
            return Object.assign({}, state, { errors: action.payload });   
        default: return state;
    }

}