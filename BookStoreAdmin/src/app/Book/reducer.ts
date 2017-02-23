import { Action } from '@ngrx/store';
import { BookActionTypes } from './actions';

import { BookModel } from './book-model';

export interface State {
    currentPage: number;
    books: BookModel[]
}

const initialState: State = {
    currentPage: 0,
    books: []
}

export function reducer(state: State = initialState, action: Action):State {

    switch (action.type) {

        case BookActionTypes.LOAD_BOOKS_SUCCESS:
            
            return {
                currentPage: 0,
                books: action.payload
            }
        case BookActionTypes.ADD_BOOK_SUCCESS:
            /*

             let xx = {
                currentPage: state.currentPage,
                authors: state.authors.concat(action.payload)
            }
            alert(xx.authors.length);
            return xx;
            */

            let xx = {
                currentPage: state.currentPage,
                books: state.books.concat(action.payload)

                //state.authors.concat(action.payload)
            };

            //return xx;
            return state;
    }

}