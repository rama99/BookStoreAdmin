import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthorModel } from './author-model';

@Injectable()
export class AuthorService {

    constructor(private http:Http) {

    }

    loadAuthors(): Observable<AuthorModel[]> {      

        return this.http.get('http://localhost:57599/author/GetAuthors')
            .map((data) => data.json()); 
       
    }

    addAuthor(authorModel: AuthorModel): Observable<AuthorModel> {

        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:57599/author/AddAuthor', JSON.stringify(authorModel), { headers: headers })
                        .map(data => data.json());
            //return Observable.of(authorModel);
    }

    editAuthor(authorModel: AuthorModel): Observable<AuthorModel> {

        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:57599/author/EditAuthor', JSON.stringify(authorModel), { headers: headers })
            .map(data => data.json());
    }

}