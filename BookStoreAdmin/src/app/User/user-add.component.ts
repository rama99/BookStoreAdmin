import { Component, OnInit, ViewChild, ChangeDetectionStrategy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { UserActions } from './actions'; 

@Component({
    selector: '',
    templateUrl: 'user/add',
    providers: [],
})

export class UserAddComponent implements OnInit {

    fg: FormGroup;

    constructor( private fb: FormBuilder,
                 private store:Store<{}>
    ) { }

    ngOnInit() {

        this.fg = this.fb.group({
            "id": [0,Validators.required],
            "user_name": ["", Validators.compose([Validators.required])],
            "first_name": ["", Validators.compose([Validators.required])],
            "last_name": ["", Validators.compose([Validators.required])],
            "password": ["", Validators.compose([Validators.required])],
            "confirm_password": ["", Validators.compose([Validators.required])],
        })
    }

    add() {
        alert(JSON.stringify(this.fg.value));

        this.store.dispatch(UserActions.addUser(this.fg.value));
    }
}

/*
id: number;
    user_name: string;
    first_name: string;
    last_name: string;
    password: string;
    confirm_password: string;
*/