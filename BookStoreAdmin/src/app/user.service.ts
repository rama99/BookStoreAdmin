import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoginModel, LoginResponseModel } from './login-model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/throttleTime';

//throttleTime(1000);

@Injectable()
export class UserService {

    constructor(private http:Http) {

    }

    validateUser(login: LoginModel): Observable<LoginResponseModel> {

        let response: LoginResponseModel = {
            isValidUser: true,
            errorMessage:""
        }

        return Observable.of(response); //.throttleTime(2000);
    }

    logOut(): Observable<LoginResponseModel> {

        let response: LoginResponseModel = {
            isValidUser: false,
            errorMessage: ""
        }

        return Observable.of(response); //.throttleTime(2000);
    }

}