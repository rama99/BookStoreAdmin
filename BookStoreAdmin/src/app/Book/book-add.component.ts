﻿import { Component, OnInit, ViewChild , Renderer , ElementRef , AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AuthorModel } from '../author/author-model';
import { CategoryModel } from '../Category/category-model';


import { addBook } from './actions';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { loadAuthors } from '../author/actions';
import { loadCatgories } from '../Category/actions';
import { loadBooks, loadBookAuthorCategory, loadAllSuccess} from '../book/actions';

@Component({
    selector: 'book-add',
    templateUrl: '/book/add'

})

export class BookAddComponent implements OnInit , AfterViewInit{

    public fg: FormGroup;
    public authors$: Observable<AuthorModel>;
    public categories$: Observable<CategoryModel>;

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

       /* this.store.dispatch(loadCatgories());
        this.store.dispatch(loadAuthors());       
        this.store.dispatch(loadBooks()); */

        this.store.dispatch(loadBookAuthorCategory());


        this.authors$ = this.store.select('authors');
        this.categories$ = this.store.select('categories'); 
    }

    addBook() {

        if (this.fg.invalid) {
            this.model.show();
        }
        else {
            this.store.dispatch(addBook(this.fg.value));
            console.log(this.fg.value);
        }
        
    }

}