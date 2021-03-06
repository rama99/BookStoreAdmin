import { NgModule }      from '@angular/core';
import { BrowserModule , Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './404.component';

import { AuthorModule } from './author/author.module';
import { CategoryModule } from './Category/category.module';
import { BookModule } from './book/book.module';
import { TempModule } from './temp/temp.module';
import { UserModule } from './user/user.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer as authorReducer } from './author/reducer';
import { reducer as categoryReducer } from './Category/reducer';
import { reducer as bookReducer } from './book/reducer';
import { reducer as userReducer } from './reducer';

import { reducer as usersReducer } from './user/reducer';
 
import { AppEffects } from './app.effects';
//import { AuthorEffects } from './author/authors-effects';
//import { CategoryEffects } from './category/categories-effects';

import { canActivateGuard } from './canActivate';

import { CategoryService } from './category.service';
import { BookService } from './book.service';
import { UserService } from './user.service';

import { CONFIG } from './config';


@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            { path: '', component: LoginComponent, data : { displayMenu: false } },
           // { path: 'home', component: HomeComponent },
            { path: "spa/home", canActivate: [canActivateGuard], component: HomeComponent },
            { path: 'spa/about', canActivate: [canActivateGuard],  component: AboutComponent },
            { path: 'spa/login', component: LoginComponent, data: { displayMenu: false }  },
            { path: '**', component: PageNotFoundComponent, data: { displayMenu: false }}
        ]),
        AuthorModule,
        CategoryModule,
        BookModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.provideStore({
            authors: authorReducer,
            categories: categoryReducer,
            books: bookReducer,
            user: userReducer,
            users: usersReducer
        }),
        EffectsModule.run(AppEffects),
        TempModule,
        UserModule /*,
        EffectsModule.run(CategoryEffects)*/
    ],
    declarations: [AppComponent, AboutComponent, HomeComponent, LoginComponent, PageNotFoundComponent],
    providers: [canActivateGuard,
        CategoryService,
        BookService,
        UserService,
        Title,
        { provide: CONFIG, useValue: { apiUrl: 'http://localhost:57599' } }
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
