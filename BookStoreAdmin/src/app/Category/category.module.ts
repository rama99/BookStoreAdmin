import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import { StoreModule } from '@ngrx/store';
//import { EffectsModule } from '@ngrx/effects';

import { CategoryMainComponent } from './category-main.component';
import { CategoryListComponent } from './category-list.component';
import { CategoryAddComponent } from './category-add.component';
import { EditCategoryComponent } from './category-edit.component';

import { ModalModule } from 'ng2-bootstrap/modal';
import { AccordionModule } from 'ng2-bootstrap/accordion';

//import { reducer as categoryReducer } from './reducer';
//import { CategoryEffects } from './categories-effects';
//import { CategoryService } from './category.service';
//import { TempService } from './temp.service';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forChild([
            {
                path: 'categories', component: CategoryMainComponent, children: [
                    { path: '', component: CategoryListComponent },
                    { path: 'add', component: CategoryAddComponent }
                ]
            }
        ]),
        ModalModule.forRoot(),
        AccordionModule.forRoot()
    ],
    exports: [],
    declarations: [CategoryMainComponent, CategoryListComponent, CategoryAddComponent, EditCategoryComponent],
    //providers: [CategoryService]
})

export class CategoryModule {

}