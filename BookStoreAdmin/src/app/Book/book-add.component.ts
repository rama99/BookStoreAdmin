import { Component, OnInit, ViewChild , Renderer , ElementRef , AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AuthorModel } from '../author/author-model';
import { CategoryModel } from '../Category/category-model';
import { validationMessages } from './validations';

import { addBook } from './actions';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { loadAuthors } from '../author/actions';
import { loadCatgories } from '../Category/actions';
import { loadBooks, loadBookAuthorCategory, loadAllSuccess , validationErrorBook } from '../book/actions';

@Component({
    selector: 'book-add',
    templateUrl: '/book/add'

})

export class BookAddComponent implements OnInit , AfterViewInit{

    public fg: FormGroup;
    public authors$: Observable<AuthorModel>;
    public categories$: Observable<CategoryModel>;

    formErrors = {
        'title': '',
        'description': '',
        'category': '',
        'authors': '',
        'price':''
    }; 

    @ViewChild('staticModal') model: any;
    @ViewChild('title') title: ElementRef;

    constructor(
        private fb: FormBuilder,
        public store: Store<{}>,
        private renderer: Renderer) {

    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.title.nativeElement, 'focus');
    }

    ngOnInit() {

        this.fg = this.fb.group({
            "id": [0, Validators.compose([Validators.required])],
            "title": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])],
            "category": ["", Validators.compose([Validators.required])],
            "authors": ["", Validators.compose([Validators.required])],
            "price": [, Validators.compose([Validators.required])]
        });     

        this.store.dispatch(loadBookAuthorCategory());


        this.authors$ = this.store.select('authors');
        this.categories$ = this.store.select('categories'); 
    }

    addBook() {

        if (this.fg.invalid) {
            this.store.dispatch(validationErrorBook(this.getValidationErrorMsgs()));
            this.model.show();
        }
        else {
            this.store.dispatch(addBook(this.fg.value));           
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