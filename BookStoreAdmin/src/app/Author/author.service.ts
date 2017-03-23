import { Injectable , Inject } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthorModel } from './author-model';
import { CONFIG } from '../config';

@Injectable()
export class AuthorService {

    constructor(private http: Http,
        @Inject(CONFIG) private config:any
                 ) {

    }

    loadAuthors(): Observable<AuthorModel[]> {
       
        return this.http.get(this.config.apiUrl + '/author/GetAuthors')
            .map((data) => data.json()); 
       
    }

    addAuthor(authorModel: AuthorModel): Observable<AuthorModel> {

        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.config.apiUrl + '/author/AddAuthor', JSON.stringify(authorModel), { headers: headers })
                        .map(data => data.json());
            
    }

    editAuthor(authorModel: AuthorModel): Observable<AuthorModel> {

        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.config.apiUrl + '/author/EditAuthor', JSON.stringify(authorModel), { headers: headers })
            .map(data => data.json());
    }

}