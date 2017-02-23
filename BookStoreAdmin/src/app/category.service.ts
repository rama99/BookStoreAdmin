import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CategoryModel } from './category/category-model';

@Injectable()
export class CategoryService {

    constructor(private http: Http) { }

    loadCategories(): Observable<CategoryModel[]> {

        let data = [
            { id: 1, name: 'IT', description: 'IT books here....' },
            { id: 2, name: 'CS', description: 'CS books here....' }
        ]

        return this.http.get('http://localhost:57599/category/GetCategories')
                        .map(data => data.json());
       
       // return Observable.of(data);

    }

    addCategory(category: CategoryModel): Observable<CategoryModel> {       

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:57599/category/addCategory', JSON.stringify(category), { headers: headers })
                   .map(data => data.json());
            
        //return Observable.of(category);
    }


}