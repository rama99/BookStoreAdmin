import { Injectable , Inject } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CategoryModel } from './category/category-model';

import { CONFIG } from './config';

@Injectable()
export class CategoryService {

    constructor(private http: Http,
        @Inject(CONFIG) private config:any
    
        ) { }

    loadCategories(): Observable<CategoryModel[]> {

        let data = [
            { id: 1, name: 'IT', description: 'IT books here....' },
            { id: 2, name: 'CS', description: 'CS books here....' }
        ]

        return this.http.get(this.config.apiUrl + '/category/GetCategories')
                        .map(data => data.json());
       
       // return Observable.of(data);

    }

    addCategory(category: CategoryModel): Observable<CategoryModel> {       

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.config.apiUrl + '/category/addCategory', JSON.stringify(category), { headers: headers })
                   .map(data => data.json());
            
        //return Observable.of(category);
    }

    editAuthor(authorModel: CategoryModel): Observable<CategoryModel> {

        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.config.apiUrl + '/category/EditCategory', JSON.stringify(authorModel), { headers: headers })
            .map(data => data.json());
    }


}