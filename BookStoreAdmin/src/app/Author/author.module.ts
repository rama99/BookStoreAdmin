import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
//import { StoreModule } from '@ngrx/store';
//import { EffectsModule } from '@ngrx/effects';

//import { reducer as authorReducer } from './reducer';

//import { AuthorEffects } from './authors-effects';

// RECOMMENDED (doesn't work with system.js)
import { ModalModule } from 'ng2-bootstrap/modal';

// RECOMMENDED (doesn't work with system.js)
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { AccordionModule } from 'ng2-bootstrap/accordion';

import { AuthorMainComponent } from './author-main.component';
import { AuthorListComponent } from './author-list.component';
import { AuthorAddComponent } from './author-add.component';
import { AuthorDetailComponent } from './author-detail.component';
import { AuthorEditComponent } from './author-edit.component';

import { AuthorService } from './author.service';

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild([
            {
                path: 'author', component: AuthorMainComponent, children: [
                    { path: '', component: AuthorListComponent },
                    { path: 'add', component: AuthorAddComponent },
                    { path: 'edit', component: AuthorEditComponent}
                    ] }

        ]),
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
       /* StoreModule.provideStore({
            authors: authorReducer
        }),
        EffectsModule.run(AuthorEffects) , */
        AccordionModule.forRoot(),
        ToastModule.forRoot()
              ],
    exports: [],
    declarations: [AuthorMainComponent,
        AuthorListComponent,
        AuthorAddComponent,
        AuthorDetailComponent,
        AuthorEditComponent],
    providers: [AuthorService]
})

export class AuthorModule { }
