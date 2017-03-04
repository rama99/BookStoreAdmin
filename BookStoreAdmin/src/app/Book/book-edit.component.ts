import { Component, OnInit, Input, OnChanges, AfterViewInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BookModel } from './book-model';
import { editBook } from './actions';

@Component({
    selector: 'book-edit',
    templateUrl:'./book/edit'
})

export class BookEditComponent implements OnInit, OnChanges, AfterViewInit{

    @Input() book: BookModel;
    @Input() model: any;
    fg: FormGroup;

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
            "authors": ["", Validators.compose([Validators.required])],
            "price": [, Validators.compose([Validators.required])]
        });     

    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }): any {

        if (changes['book'] && this.book) {
            this.fg.setValue({
                id: this.book.id,
                title: this.book.title,
                description: this.book.description,
                category: this.book.category,
                authors: this.book.authors,
                price:this.book.price
            });
        }

    }

    ngAfterViewInit() {

    }

    edit() {
        try
        {
            this.store.dispatch(editBook(this.fg.value));
            this.model.hide();
        }
        catch (err) {
            alert('error');
        }
    }

}