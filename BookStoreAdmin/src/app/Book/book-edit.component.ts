import { Component, OnInit, Input, OnChanges, AfterViewInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BookModel } from './book-model';
import { AuthorModel } from '../author/author-model';
import { CategoryModel } from '../Category/category-model';

import { editBook } from './actions';
import { validationMessages } from './validations';

@Component({
    selector: 'book-edit',
    templateUrl:'./book/edit'
})

export class BookEditComponent implements OnInit, OnChanges, AfterViewInit{

    @Input() book: BookModel;
    @Input() model: any;
    fg: FormGroup;
    errors: string[];

    formErrors = {
        'title': '',
        'description': '',
        'category': '',
        'authors': '',
        'price': ''
    }; 

    public authors$: Observable<AuthorModel>;
    public categories$: Observable<CategoryModel>;

    constructor(
        public fb: FormBuilder,
        public store: Store<{}>

    ) { }

    ngOnInit() {       

        this.fg = this.fb.group({
            "id": [0, Validators.compose([Validators.required])],
            "title": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])],
            "category": ["", Validators.compose([Validators.required])],
            "authors": [[""], Validators.compose([Validators.required])],
            "price": [, Validators.compose([Validators.required])]
        });  

        this.authors$ = this.store.select('authors');
        this.categories$ = this.store.select('categories');    

    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }): any {

        if (changes['book'] && this.book) {
            this.fg.setValue({
                id: this.book.id,
                title: this.book.title,
                description: this.book.description,
                category: this.book.category.id,
                authors: this.book.authors.map(author => author.id),
                price:this.book.price
            });

            this.errors = this.getValidationErrorMsgs();
        }

    }

    ngAfterViewInit() {

    }

    edit() {
        try
        { 
            if (!this.fg.invalid)
            {
                //this.store.dispatch(editAuthor(this.fg.value));
                alert('TO DO');
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