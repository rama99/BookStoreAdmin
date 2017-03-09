import { Component, OnInit, Input, OnChanges, AfterViewInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { CategoryModel } from './category-model';
import { CategoryActions } from './actions';
import { validationMessages } from './validations';

@Component({
    selector: 'category-edit',
    templateUrl:'./category/edit'
})

export class EditCategoryComponent {

    @Input() category: CategoryModel;
    @Input() model: any;
    fg: FormGroup;
    errors: string[];

    formErrors = {
        'name': '',
        'description': ''
    }; 

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

            this.errors = this.getValidationErrorMsgs();
        }

    }

    ngAfterViewInit() {

    }

    edit() {
        try {           

            if (!this.fg.invalid) {
                this.store.dispatch(CategoryActions.editCategory(this.fg.value));
                this.model.hide();
            }
            else {
                this.errors = this.getValidationErrorMsgs();
            }
        }
        catch (err) {
            alert('error');
        }
    }

    getValidationErrorMsgs() {

        let errors: string[] = [];

        for (const field in this.formErrors) {

            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = this.fg.get(field);

            if (control.invalid) {
                const messages = validationMessages[field];

                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }

            if (this.formErrors[field] != '') {
                errors.push(this.formErrors[field]);
            }
        }

        return errors;
    }

}