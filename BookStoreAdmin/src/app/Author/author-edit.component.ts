import { Component, OnInit, Input, OnChanges, DoCheck , AfterViewInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormArray, FormGroup , Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AuthorModel } from './author-model';
import { AuthorActions } from './actions';
import { validationMessages } from './validation';

@Component({
    selector: 'author-edit',
    templateUrl:'./author/edit'
})

export class AuthorEditComponent implements OnInit, OnChanges, AfterViewInit, DoCheck{

    @Input() author: AuthorModel;
    @Input() model: any;
    fg: FormGroup;
    errors: string[];

    formErrors = {
        'first_name': '',
        'last_name': '',
        'description': ''
    }; 

    constructor(
        public formBuilder: FormBuilder,
        public store:Store<{}>

    ) {}

    ngOnInit() { 
       
        this.fg = this.formBuilder.group({
            "id": ["", Validators.compose([Validators.required])],
            "first_name": ["", Validators.compose([Validators.required])],
            "last_name": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])]
        }); 
        
    }

    ngDoCheck() {       
        
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }): any {
        
        if (changes['author'] && this.author) {
            this.fg.setValue({
                id: this.author.id,
                first_name: this.author.first_name,
                last_name: this.author.last_name,
                description: this.author.description
            });

            this.errors = this.getValidationErrorMsgs();
        }        
                    
    }

    ngAfterViewInit() {      
       
    }

    edit() {
        try {
            
            if (!this.fg.invalid)
            {               
                this.store.dispatch(AuthorActions.editAuthor(this.fg.value));               
                this.model.hide();
            }
            else
            {
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