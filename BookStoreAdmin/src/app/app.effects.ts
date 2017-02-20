﻿import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { AuthorService } from './author/author.service';
import { AuthorActionTypes, loadAuthorsSuccess, addAuthorSuccess } from './author/actions';

import { CategoryService } from './category.service';

import { TempService } from './temp.service';

import { CategoryActionTypes, loadCategoriesSuccess, addCategorySuccess } from './category/actions';

import { BookService } from './book.service';
import { BookActionTypes, loadBooksSuccess, addBook, addBookSuccess } from './book/actions';

@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private authorService: AuthorService,
        private service: CategoryService, 
        private bookService: BookService
        
        
    ) { }

    @Effect() authors$ = this.actions$
        .ofType(AuthorActionTypes.LOAD_AUTHORS)
        .mergeMap(() => this.authorService.loadAuthors())
        .map(authors => loadAuthorsSuccess(authors));

    @Effect() addAuthor$ = this.actions$
        .ofType(AuthorActionTypes.ADD_AUTHOR)
        .mergeMap((action) => this.authorService.addAuthor(action.payload))
        .map(author => addAuthorSuccess(author));

    @Effect() categories$ = this.actions$
        .ofType(CategoryActionTypes.LOAD_CATEGORIES)
        .mergeMap(() => this.service.loadCategories())
        .map(authors => loadCategoriesSuccess(authors));

    @Effect() addCategory$ = this.actions$
        .ofType(CategoryActionTypes.ADD_CATEGORY)
        .mergeMap((action) => this.service.addCategory(action.payload))
        .map(category => addCategorySuccess(category));

    @Effect() books$ = this.actions$
        .ofType(BookActionTypes.LOAD_BOOKS)
        .mergeMap(() => this.bookService.loadBooks())
        .map(books => loadBooksSuccess(books));

    @Effect() addBook$ = this.actions$
        .ofType(BookActionTypes.ADD_BOOK)
        .mergeMap((action) => this.bookService.addBook(action.payload))
        .map(book => addBookSuccess(book));
}