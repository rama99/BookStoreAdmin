import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { LoginComponent } from './login.component';

import { AuthorModule } from './author/author.module';
import { CategoryModule } from './Category/category.module';
import { BookModule } from './book/book.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer as authorReducer } from './author/reducer';
import { reducer as categoryReducer } from './Category/reducer';
import { reducer as bookReducer } from './book/reducer';
 
import { AppEffects } from './app.effects';
//import { AuthorEffects } from './author/authors-effects';
//import { CategoryEffects } from './category/categories-effects';

import { canActivateGuard } from './canActivate';

import { CategoryService } from './category.service';
import { BookService } from './book.service';


@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            { path: '', component: LoginComponent },
            { path: 'about', canActivate: [canActivateGuard],  component: AboutComponent },
            { path: 'login', component: LoginComponent }
        ]),
        AuthorModule,
        CategoryModule,
        BookModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.provideStore({
            authors: authorReducer,
            categories: categoryReducer,
            books: bookReducer
        }),
        EffectsModule.run(AppEffects) /*,
        EffectsModule.run(CategoryEffects)*/
    ],
    declarations: [AppComponent, AboutComponent, HomeComponent, LoginComponent],
    providers: [canActivateGuard, CategoryService, BookService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
