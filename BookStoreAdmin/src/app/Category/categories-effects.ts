/*import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { CategoryModel } from './category-model';

import { CategoryService } from './category.service';
import { CategoryActionTypes, loadCategoriesSuccess } from './actions';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryEffects {

    constructor(
        private actions$: Actions,
        private categoryService: CategoryService
    ) { }

    @Effect() categories$ = this.actions$
        .ofType(CategoryActionTypes.LOAD_CATEGORIES)
        .mergeMap(() => this.categoryService.loadCategories())
        .map(authors => loadCategoriesSuccess(authors));

}*/