import { Component, OnInit, ViewChild, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions , UsersActionTypes } from './actions';

@Component({
    selector: '',
    templateUrl: 'user/list',
    providers: [],
    styles:[]
})

export class UserListComponent implements OnInit {

    constructor(
        private store:Store<any>
    ) { }

    ngOnInit() {
        console.log('LOAD USERS');
        this.store.dispatch(UserActions.loadUsers());
    }
}