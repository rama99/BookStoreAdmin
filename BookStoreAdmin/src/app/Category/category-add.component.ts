import { Component , OnInit , ViewChild  , Renderer , AfterViewInit , ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CategoryActions } from './actions';
import { validationMessages } from './validations';

@Component({
    selector: 'category-add',
    templateUrl:'/category/add'

})

export class CategoryAddComponent implements OnInit , AfterViewInit {

    fg: FormGroup;
    @ViewChild('staticModal') modal: any
    @ViewChild('name') name: ElementRef; 

    formErrors = {
        'name': '',       
        'description': ''
    }; 

    constructor(
        private fb: FormBuilder,
        public store: Store<{}>,
        private renderer:Renderer
    ) {

    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.name.nativeElement, 'focus');
    }

    ngOnInit() {

     this.fg =   this.fb.group({
            "id": [0, Validators.compose([Validators.required])],
            "name": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])]
        })

    }

    addCategory() { 
        

        if (this.fg.invalid) {
            this.store.dispatch(CategoryActions.validationErrorCategory(this.getValidationErrorMsgs()));
            this.modal.show();
        }
        else {
            this.store.dispatch(CategoryActions.addCategory(this.fg.value));
           // this.fg.reset();
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