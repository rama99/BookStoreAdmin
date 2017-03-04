import { Component, OnInit, Input, OnChanges, AfterViewInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BookModel } from './book-model';
import { AuthorModel } from '../author/author-model';
import { CategoryModel } from '../Category/category-model';

import { editBook } from './actions';

@Component({
    selector: 'book-edit',
    templateUrl:'./book/edit'
})

export class BookEditComponent implements OnInit, OnChanges, AfterViewInit{

    @Input() book: BookModel;
    @Input() model: any;
    fg: FormGroup;

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
        }

    }

    ngAfterViewInit() {

    }

    edit() {
        try
        {
            //this.store.dispatch(editBook(this.fg.value));
            alert('TO DO');
            this.model.hide();
        }
        catch (err) {
            alert('error');
        }
    }

}