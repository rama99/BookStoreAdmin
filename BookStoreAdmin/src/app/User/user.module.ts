import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { UserMainComponent } from './user-main.component';
import { UserListComponent } from './user-list.component';
import { UserSearchComponent } from './user-search.component';
import { UserAddComponent } from './user-add.component';

@NgModule({
    imports: [ SharedModule,
        RouterModule.forChild([
            {
                path: 'spa/users', component: UserMainComponent , children: [
                    { path: '', component: UserListComponent },
                    { path: 'list', component: UserListComponent },
                    { path: 'add', component: UserAddComponent },
                    { path: 'search' , component: UserSearchComponent }
                ]
            }
        ])],
    exports: [],
    declarations: [UserMainComponent, UserListComponent, UserAddComponent, UserSearchComponent],
    providers:[]
})

export class UserModule { }