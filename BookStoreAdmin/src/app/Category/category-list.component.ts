import { Component, OnInit, ViewChild} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CategoryModel } from './category-model';
import { loadCatgories } from './actions';

@Component({
    selector: '',
    templateUrl:'/category/list'

})

export class CategoryListComponent {
    
    @ViewChild('staticModal') model: any;
    editCategory: CategoryModel;

    constructor(        
        public store: Store<{}>
    ) {

    }

    ngOnInit() {
        this.store.dispatch(loadCatgories());
    }

    edit(category: CategoryModel) {
        this.editCategory = category;
        this.model.show();
    }
}