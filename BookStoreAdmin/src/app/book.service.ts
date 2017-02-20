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
            { id:1 , title:'Book 1' , description:' this is a description' , category: 1 , authors:[1,2,3,4] , price:99.99 }
        ]

        return Observable.of(data);
    }

    addBook(book: BookModel): Observable<BookModel> {
        return Observable.of(book);
    }
}

