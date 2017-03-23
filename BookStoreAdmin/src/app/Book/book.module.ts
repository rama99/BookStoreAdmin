import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';

// RECOMMENDED (doesn't work with system.js)
import { ModalModule } from 'ng2-bootstrap/modal';

import { BookMainComponent } from './book-main.component';
import { BookAddComponent } from './book-add.component';
import { BookListComponent } from './book-list.component';
import { BookEditComponent } from './book-edit.component';
import { canActivateGuard } from '../canActivate';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forChild([

            {
                path: 'spa/books', canActivate: [canActivateGuard], component: BookMainComponent, children: [
                    { path: '', canActivate: [canActivateGuard], component: BookListComponent },
                    { path: 'add', canActivate: [canActivateGuard], component: BookAddComponent }
                ]
            }
        ]),
        ModalModule.forRoot(),
        SharedModule
    ],
    exports: [],
    declarations: [BookMainComponent, BookListComponent, BookAddComponent, BookEditComponent],
    providers:[]

})

export class BookModule { }