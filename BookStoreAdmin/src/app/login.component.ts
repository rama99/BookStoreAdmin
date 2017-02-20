import { Component, OnInit } from '@angular/core';
import { FormGroup , FormArray , FormBuilder  , Validators} from '@angular/forms';

@Component({
    selector: '',
    templateUrl:'/user/login'
})

export class LoginComponent implements OnInit {

    formgroup: FormGroup;

    constructor(
        private fb:FormBuilder
    ) {

    }

    ngOnInit() {

        this.formgroup = this.fb.group({
            "login": ["", Validators.compose([Validators.required])],
            "password": ["", Validators.compose([Validators.required])]
        })
    }

    validateLogin() {
        alert('login');
    }

}