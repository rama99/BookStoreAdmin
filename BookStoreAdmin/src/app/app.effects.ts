import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ActivatedRoute , Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { AuthorService } from './author/author.service';
import { AuthorActionTypes, AuthorActions} from './author/actions';

import { CategoryService } from './category.service';

import { CategoryActionTypes, CategoryActions } from './category/actions';

import { BookService } from './book.service';
import { BookActionTypes, BooksActions  } from './book/actions';

import { UserService } from './user.service';
import { UserActionTypes, validateUser, validateUserSuccess, logOutSuccess, logOut, canActivateSuccess } from './actions';

import { UserActions , UsersActionTypes } from './user/actions';

import { BookCategoryAuthorModel, BookModel } from './Book/book-model';


@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private authorService: AuthorService,
        private service: CategoryService, 
        private bookService: BookService,
        private userService: UserService,
        private router: Router,
        private route:ActivatedRoute        
        
    ) { }    
     

    @Effect() authors$ = this.actions$
        .ofType(AuthorActionTypes.LOAD_AUTHORS)
        .switchMap(() => this.authorService.loadAuthors() 
            .map(authors => AuthorActions.loadAuthorsSuccess(authors))
            .catch((error) => {               
                this.redirectToLogin(error);
                return of(AuthorActions.serverErrorAuthor())
            })           
        );

    // load users
    @Effect() users$ = this.actions$
        .ofType(UsersActionTypes.LOAD_USERS)
        .do(() => { console.log('effects') })
        .switchMap(() => this.userService.getUsers()
            .do(() => console.log('LOAD USERS SUCCESS'))
            .map(users => UserActions.loadUsersSuccess(users))
            .catch((error) => {
                this.redirectToLogin(error);
                // MODIFY BELOW LINE
                return of(AuthorActions.serverErrorAuthor())
            })
        );
        
    // add user
    @Effect() addUser$ = this.actions$
        .ofType(UsersActionTypes.ADD_USER)
        .switchMap((action) => this.userService.addUser(action.payload)
            .map(user => UserActions.addUserSuccess(user))
            .catch((error) => {
                this.redirectToLogin(error);
                // MODFIY BELOW LINE
                return of(AuthorActions.serverErrorAuthor())               
            }) 
            
        );

    @Effect() addAuthor$ = this.actions$
        .ofType(AuthorActionTypes.ADD_AUTHOR)
        .switchMap((action) => this.authorService.addAuthor(action.payload)
            .map(author => AuthorActions.addAuthorSuccess(author))
            .catch((error) => {
                this.redirectToLogin(error);
                return of(AuthorActions.serverErrorAuthor())
            })
        );

    @Effect() editAuthor$ = this.actions$
        .ofType(AuthorActionTypes.EDIT_AUTHOR)
        .switchMap(
        (action) => this.authorService.editAuthor(action.payload)
            .map(author => AuthorActions.editAuthorSuccess(author))
            .catch((error) => {
                this.redirectToLogin(error);
                return of(AuthorActions.serverErrorAuthor())
            }) 
           
        );

    @Effect() categories$ = this.actions$
        .ofType(CategoryActionTypes.LOAD_CATEGORIES)
        .switchMap(
        (action) => this.service.loadCategories()
            .map(categories => CategoryActions.loadCategoriesSuccess(categories))
            .catch((error) => {
                this.redirectToLogin(error);
                return of(CategoryActions.serverErrorCategory())
            })

          
        );
        

    @Effect() addCategory$ = this.actions$
        .ofType(CategoryActionTypes.ADD_CATEGORY)
        .switchMap((action) => this.service.addCategory(action.payload)
            .map((category) => CategoryActions.addCategorySuccess(category))
            .catch((error) => {
                this.redirectToLogin(error);
                return of(CategoryActions.serverErrorCategory())
            })
           
        );

    @Effect() editCategory$ = this.actions$
        .ofType(CategoryActionTypes.EDIT_CATEGORY)
        .switchMap(
        (action) => this.service.editAuthor(action.payload)
            .map(category => CategoryActions.editCatgorySuccess(category))
            .catch((error) => {
                this.redirectToLogin(error);
                return of(CategoryActions.serverErrorCategory())
            })
          
        );
     

    @Effect() books$ = this.actions$
        .ofType(BookActionTypes.LOAD_BOOKS)
        .switchMap(
        (action) => this.bookService.loadBooks()
            .map(books => BooksActions.loadBooksSuccess(books))
            .catch((error) => {
                this.redirectToLogin(error);
                return of(BooksActions.serverErrorBook())
            })
          
        );
       

    @Effect() booksCategoriesAuthors = this.actions$
        .ofType(BookActionTypes.LOAD_BOOKS_AUTHORS_CATEGORIES)        
        .switchMap(
        (action) => this.bookService.loadBookCategoryAuthor()
            .map((data: BookCategoryAuthorModel) => BooksActions.loadAllSuccess(data))
            .catch((error) => {
                this.redirectToLogin(error);
                //return of(BooksActions.loadAllSuccess({ books: [], authors: [], categories: [] }))
                return of(BooksActions.serverErrorBook())
            })
            
        );       


    @Effect() addBook$ = this.actions$
        .ofType(BookActionTypes.ADD_BOOK)
        .switchMap((action) => this.bookService.addBook(action.payload)
            .map((book) => BooksActions.addBookSuccess(book))
            .catch((error) => {
                this.redirectToLogin(error);
                return of(BooksActions.serverErrorBook())
            })
            
        );  

    @Effect() editBook$ = this.actions$
        .ofType(BookActionTypes.EDIT_BOOK)
        .switchMap(
        (action) => this.bookService.editBook(action.payload)
            .map(book => BooksActions.editBookSuccess(book))
            .catch((error) => {
                this.redirectToLogin(error);
                return of(BooksActions.serverErrorBook())
            })
          
        );  

    @Effect() login$ = this.actions$
        .ofType(UserActionTypes.VALIDATE_USER)
        .switchMap(
        (action) => this.userService.validateUser(action.payload)
            .map(loginResponse => validateUserSuccess(loginResponse))
        );
        
    @Effect() canActivate$ = this.actions$
        .ofType(UserActionTypes.CAN_ACTIVATE)
        .switchMap(
        (action) => this.userService.canActivate()
            .map(response => canActivateSuccess)
        );

    @Effect() logout$ = this.actions$
        .ofType(UserActionTypes.LOGOUT)
        .switchMap(() => this.userService.logOut())
        .map(loginResponse => validateUserSuccess(loginResponse));

    redirectToLogin(error:any) 
    {
        if (error.status === 403 || error.status === 401) {
            this.router.navigate(['spa', 'login']);
        }
        
    }
}