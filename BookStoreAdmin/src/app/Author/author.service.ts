import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AuthorModel } from './author-model';

@Injectable()
export class AuthorService {

    constructor(private http:Http) {

    }

    loadAuthors(): Observable<AuthorModel[]> {

        let authors = [
            { id: 1, first_name: 'rama', last_name: 'kishore', description: 'desc here' },
            { id: 2, first_name: 'kiran', last_name: 'kumar', description: 'desc here' }

        ]
        
        return Observable.of(authors);
    }

    addAuthor(authorModel: AuthorModel): Observable<AuthorModel> {

        return Observable.of(authorModel);
    }

}