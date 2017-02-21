import { Action } from '@ngrx/store';
import { AuthorModel } from './author-model';
import { AuthorActionTypes } from './actions';

interface State {
    currentPage: number;
    authors: AuthorModel[];
}

const initialState: State = {
    currentPage: 0,
    authors: []
}

export function reducer(state: State = initialState, action: Action) {

    switch (action.type) {

       /* case AuthorActionTypes.LOAD_AUTHORS:
            return state; */
        case AuthorActionTypes.LOAD_AUTHORS_SUCCESS:

          //  alert(action.payload.length);
              return {
                  currentPage: 0,
                  authors:action.payload
              }
        case AuthorActionTypes.ADD_AUTHOR_SUCCESS:


            let xx = {
                currentPage: state.currentPage,
                authors: state.authors.concat(action.payload)
            }
           
            return xx;
        default: return state;
    }

}