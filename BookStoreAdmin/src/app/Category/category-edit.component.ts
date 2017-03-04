import { Component, OnInit, Input, OnChanges, AfterViewInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { CategoryModel } from './category-model';
import { editCategory } from './actions';

@Component({
    selector: 'category-edit',
    templateUrl:'./category/edit'
})

export class EditCategoryComponent {

    @Input() category: CategoryModel;
    @Input() model: any;
    fg: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        public store: Store<{}>

    ) { }

    ngOnInit() {

        this.fg = this.formBuilder.group({
            "id": ["", Validators.compose([Validators.required])],
            "name": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])],           
        });
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }): any {

        if (changes['category'] && this.category) {
            this.fg.setValue({
                id: this.category.id,
                name: this.category.name,                
                description: this.category.description
            });
        }

    }

    ngAfterViewInit() {

    }

    edit() {
        try {

            this.store.dispatch(editCategory(this.fg.value));
            this.model.hide();
        }
        catch (err) {
            alert('error');
        }
    }

}