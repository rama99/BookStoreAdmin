import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RECOMMENDED (doesn't work with system.js)
import { ModalModule } from 'ng2-bootstrap/modal';

import { BookMainComponent } from './book-main.component';
import { BookAddComponent } from './book-add.component';
import { BookListComponent } from './book-list.component';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forChild([

            {
                path: 'books', component: BookMainComponent, children: [
                    { path: '', component: BookListComponent },
                    { path: 'add', component: BookAddComponent }
                ]
            }
        ]),
        ModalModule.forRoot()
    ],
    exports: [],
    declarations: [BookMainComponent, BookListComponent, BookAddComponent],
    providers:[]

})

export class BookModule { }