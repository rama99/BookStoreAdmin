import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BookModel } from './book/book-model';


@Injectable()
export class BookService {

    constructor() {

    }

    loadBooks(): Observable<BookModel[]> {

        let data = [
            { id: 1, title: 'Book 1', description: ' this is a description', category: { id: 1, name: 'category 1' , description:'desc here'}, authors: [{id:1 , first_name:'fname' , last_name: 'lname' , description:'description here'}] , price:99.99 }
        ]

        alert('loadBooks');

        return Observable.of(data);
    }

    addBook(book: BookModel): Observable<BookModel> {
        return Observable.of(book);
    }
}

