import { Action } from '@ngrx/store';
import { BookActionTypes } from './actions';

import { BookModel } from './book-model';

export interface State {
    currentPage: number;
    books: BookModel[];
    errors: string[];
}

const initialState: State = {
    currentPage: 0,
    books: [],
    errors: []
}

export function reducer(state: State = initialState, action: Action):State {

    try {
        switch (action.type) {

            /* case BookActionTypes.LOAD_BOOKS_SUCCESS:
     
                 let xx2 = Object.assign({}, state, { books: action.payload }); 
                 return xx2;*/

            case BookActionTypes.LOAD_ALL_SUCCESS:

                let xx1 = Object.assign({}, state, { books: action.payload.data.books });               
                return xx1;

            case BookActionTypes.ADD_BOOK_SUCCESS:            

                return Object.assign({}, state, { books: state.books.concat(action.payload) });

            default: return state;
        }
    }
    catch (err) {
        alert('error');
    }

}