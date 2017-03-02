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

    switch (action.type) {

        case BookActionTypes.LOAD_BOOKS_SUCCESS: 

            return Object.assign({}, state, { books: action.payload })

        case BookActionTypes.LOAD_ALL_SUCCESS:
            return Object.assign({}, state, { books: action.payload.data.books });
        case BookActionTypes.ADD_BOOK_SUCCESS:          

            let books = state.books.concat(action.payload);

            let xx = {
                currentPage: state.currentPage,
                books: books,
                errors: state.errors
            };

            return xx;        
    }

}