import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { CategoryModel } from './category/category-model';

@Injectable()
export class CategoryService {

    constructor() { }

    loadCategories(): Observable<CategoryModel[]> {

        let data = [
            { id: 1, name: 'IT', description: 'IT books here....' },
            { id: 2, name: 'CS', description: 'CS books here....' }
        ]

        return Observable.of(data);

    }

    addCategory(category: CategoryModel): Observable<CategoryModel> {
        return Observable.of(category);
    }


}