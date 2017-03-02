import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { Observable } from  'rxjs/Observable';

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { AuthorService } from './author/author.service';
import { AuthorActionTypes, loadAuthorsSuccess, loadAuthorsError , addAuthorSuccess } from './author/actions';

import { CategoryService } from './category.service';

import { CategoryActionTypes, loadCategoriesSuccess, addCategorySuccess } from './category/actions';

import { BookService } from './book.service';
import { BookActionTypes, loadBooksSuccess, addBook, addBookSuccess, loadBookAuthorCategory, loadAllSuccess  } from './book/actions';

import { UserService } from './user.service';
import { UserActionTypes, validateUser, validateUserSuccess, logOutSuccess, logOut } from './actions';

import { BookCategoryAuthorModel, BookModel } from './Book/book-model';

@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private authorService: AuthorService,
        private service: CategoryService, 
        private bookService: BookService,
        private userService: UserService        
        
    ) { }

    
     /*   @Effect() authors$ = this.actions$
        .ofType(AuthorActionTypes.LOAD_AUTHORS)
        .switchMap(() => this.authorService.loadAuthors())
        .map(authors => loadAuthorsSuccess(authors)); */

    @Effect() authors$ = this.actions$
        .ofType(AuthorActionTypes.LOAD_AUTHORS)
        .switchMap(() => this.authorService.loadAuthors()
            .map(authors => loadAuthorsSuccess(authors))
            .catch(error => Observable.of(loadAuthorsError(error)))
        );
        

    @Effect() addAuthor$ = this.actions$
        .ofType(AuthorActionTypes.ADD_AUTHOR)
        .switchMap((action) => this.authorService.addAuthor(action.payload)
            .map(author => addAuthorSuccess(author))

        );

       // .switchMap((action) => this.authorService.addAuthor(action.payload))
      //  .map(author => addAuthorSuccess(author));

    @Effect() categories$ = this.actions$
        .ofType(CategoryActionTypes.LOAD_CATEGORIES)
        .switchMap(() => this.service.loadCategories())
        .map(categories => loadCategoriesSuccess(categories));

    @Effect() addCategory$ = this.actions$
        .ofType(CategoryActionTypes.ADD_CATEGORY)
        .switchMap((action) => this.service.addCategory(action.payload)
            .map((category) => addCategorySuccess(category))
        );
     

    @Effect() books$ = this.actions$
        .ofType(BookActionTypes.LOAD_BOOKS)
        .switchMap(() => this.bookService.loadBooks())
        .map(books => loadBooksSuccess(books));

    @Effect() booksCategoriesAuthors = this.actions$
        .ofType(BookActionTypes.LOAD_BOOKS_AUTHORS_CATEGORIES)
        .switchMap((data: any) => this.bookService.loadBookCategoryAuthor())
        .map((data: BookCategoryAuthorModel) => loadAllSuccess(data));


    @Effect() addBook$ = this.actions$
        .ofType(BookActionTypes.ADD_BOOK)
        .switchMap((action) => this.bookService.addBook(action.payload)
            .map((book) => addBookSuccess(book))
        );    

    @Effect() login$ = this.actions$
        .ofType(UserActionTypes.VALIDATE_USER)
        .switchMap((action) => this.userService.validateUser(action.payload))
        .map(loginResponse => validateUserSuccess(loginResponse));

    @Effect() logout$ = this.actions$
        .ofType(UserActionTypes.LOGOUT)
        .switchMap(() => this.userService.logOut())
        .map(loginResponse => validateUserSuccess(loginResponse));
}