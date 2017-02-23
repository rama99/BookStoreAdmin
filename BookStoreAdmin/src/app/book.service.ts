import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BookModel } from './book/book-model';


@Injectable()
export class BookService {

    constructor(private http: Http) {

    }

    loadBooks(): Observable<BookModel[]> {

        let data = [
            { id: 1, title: 'Fountain Head', description: ' this is a description', category: { id: 1, name: 'category 1', description: 'desc here' }, authors: [{ id: 1, first_name: 'fname', last_name: 'lname', description: 'description here' }, { id: 2, first_name: 'fname2', last_name: 'lname2', description: 'description here2' }] , price:99.99 }
        ]

        return this.http.get('http://localhost:57599/book/getbooks')
            .map((data) => data.json());

        //return Observable.of(data);
    }

    addBook(book: BookModel): Observable<BookModel> {

        let headers = new Headers();

        let book1 = {
            id: 0,
            title: 'dynamic',
            description: 'desc here',
            category: 2,
            authors: [2, 3],
            price:1234
        }

        /*          id: number;
                    title: string;
                    description: string;
                    category: CategoryModel;
                    authors: AuthorModel[];
                    price: number;

        */

        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:57599/book/AddBook', JSON.stringify(book), { headers: headers })
                        .map(data => data.json());

        //return Observable.of(book);
    }




}

