import { Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewInit, ViewContainerRef} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AuthorActions } from './actions';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorModel } from './author-model';
import { validationMessages } from './validation';

@Component({
    selector: 'author-add',
    templateUrl:'/author/add'

})


export class AuthorAddComponent implements OnInit, AfterViewInit{

    error: string;
    fg: FormGroup;
    @ViewChild('staticModal') model: any;
    @ViewChild('firstName') firstName: ElementRef;

    formErrors = {
        'first_name': '',
        'last_name': '',
        'description':''
    };  

    constructor(
        private formBuilder: FormBuilder,
        public store: Store<{}>,
        private router: Router,
        private titleService: Title,
        private renderer: Renderer,
        public toastr: ToastsManager,
        vcr: ViewContainerRef
    ) 
    {
        // Use with angular v2.2 or above
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.fg = this.formBuilder.group({
            "id": ["0"],
            "first_name": ["", Validators.compose([Validators.required, Validators.maxLength(50)])],
            "last_name": ["", Validators.compose([Validators.required, Validators.maxLength(50)])],
            "description": ["", Validators.compose([Validators.required, Validators.maxLength(2000)])]
        })
       
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.firstName.nativeElement, 'focus');
    }

    addAuthor() {
        console.log(this.fg.value);

        if (this.fg.invalid) {            
            this.store.dispatch(AuthorActions.validationErrorAuthor(this.getValidationErrorMsgs()));
            this.model.show();
        }
        else
        {            
            this.store.dispatch(AuthorActions.addAuthor(this.fg.value));
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