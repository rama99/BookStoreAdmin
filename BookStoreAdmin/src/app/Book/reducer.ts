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

            case BookActionTypes.LOAD_ALL_SUCCESS:

                return Object.assign({}, state, { books: action.payload.data.books });               
             
            case BookActionTypes.ADD_BOOK_SUCCESS:            

                return Object.assign({}, state, { books: state.books.concat(action.payload) });

            case BookActionTypes.VALIDATION_ERROR_BOOK:

                return Object.assign({}, state, { errors: action.payload });

            case BookActionTypes.EDIT_BOOK_SUCCESS:

                return Object.assign({}, state, {
                    categories: state.books.map(book => {

                        if (book.id != action.payload.id) {
                            return book;
                        }
                        else {
                            return action.payload;
                        }
                    })
                });

            default: return state;
        }
    }
    catch (err) {
        alert('error');
    }

}