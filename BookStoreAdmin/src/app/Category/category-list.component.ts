import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CategoryModel } from './category-model';
import { loadCatgories } from './actions';

@Component({
    selector: '',
    templateUrl:'/category/list'

})

export class CategoryListComponent {

    categories: Observable<CategoryModel[]>;

    constructor(        
        public store: Store<{}>
    ) {

    }

    ngOnInit() {
        this.store.dispatch(loadCatgories());
    }
}