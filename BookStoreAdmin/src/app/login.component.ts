import { Component, OnInit , ViewChild , AfterViewInit , ElementRef , Renderer } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { UserActionTypes, validateUser, validateUserSuccess } from './actions';
import { StoreModel } from './StoreModel';
import { LoginResponseModel } from './login-model';

@Component({
    selector: '',
    templateUrl:'/user/login'
})

export class LoginComponent implements OnInit , AfterViewInit {

    formgroup: FormGroup;
    errorMessage: string;
    @ViewChild('userName') userName: ElementRef;

    constructor(
        private fb: FormBuilder,
        private store: Store<StoreModel>,
        private route: ActivatedRoute,
        private router: Router,
        private title: Title,
        private renderer: Renderer

    ) {}

    ngOnInit() {

        this.formgroup = this.fb.group({
            "userName": ["", Validators.compose([Validators.required])],
            "password": ["", Validators.compose([Validators.required])]
        })

        this.title.setTitle('Login');
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.userName.nativeElement, 'focus');        
    }

    validateLogin() {
      
        if (this.formgroup.invalid) {
            this.errorMessage = "Please enter User Name / Password";
        }
        else {

            this.store.dispatch(validateUser(this.formgroup.value));
            this.store.select('user').subscribe(

                (user: LoginResponseModel) => {

                    if (user.isValidUser) {
                       // this.router.navigate(['home']);
                        this.router.navigate(['spa' , 'home']);
                    }
                    else if (user.errorMessage != '' && user.errorMessage != null) {
                        this.errorMessage = "Invalid User Name / Password";
                    }
                }
            )
        }       
    }


}