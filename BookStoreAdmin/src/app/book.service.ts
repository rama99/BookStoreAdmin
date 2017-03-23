import { Injectable , Inject } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BookModel , BookCategoryAuthorModel } from './book/book-model';
import { CONFIG } from './config';

@Injectable()
export class BookService {

    constructor( private http: Http,
        @Inject(CONFIG) private config:any ) {

    }

    loadBooks(): Observable<BookModel[]> {

        let data = [
            { id: 1, title: 'Fountain Head', description: ' this is a description', category: { id: 1, name: 'category 1', description: 'desc here' }, authors: [{ id: 1, first_name: 'fname', last_name: 'lname', description: 'description here' }, { id: 2, first_name: 'fname2', last_name: 'lname2', description: 'description here2' }] , price:99.99 }
        ]

        return this.http.get(this.config.apiUrl + '/book/getbooks')
            .map((data) => data.json());

        //return Observable.of(data);
    }

    loadBookCategoryAuthor(): Observable<BookCategoryAuthorModel> {

        return this.http.get(this.config.apiUrl + '/book/getbooks1')
            .map((data) => data.json());
    }

    addBook(book: BookModel): Observable<BookModel> {

        let headers = new Headers();       

        headers.append('Content-Type', 'application/json');

        return this.http.post(this.config.apiUrl + '/book/AddBook', JSON.stringify(book), { headers: headers })
                        .map(data => data.json());
       
    }

    editBook(bookModel: BookModel): Observable<BookModel> {

        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.config.apiUrl + '/book/EditBook', JSON.stringify(bookModel), { headers: headers })
            .map(data => data.json());
    }

}

