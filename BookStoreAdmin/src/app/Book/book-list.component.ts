import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BookModel } from './book-model';
import { loadBooks } from './actions';

@Component({
    selector: '',
    templateUrl: '/book/list'

})

export class BookListComponent {

    books: Observable<BookModel[]>;

    constructor(
        public store: Store<{}>
    ) {

    }

    ngOnInit() {
        
    }

    edit(book: BookModel) {
        alert('TODO');
    }
}