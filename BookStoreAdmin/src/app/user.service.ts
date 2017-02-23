import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { LoginModel, LoginResponseModel } from './login-model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:57599/user/login', login, { headers: headers })
                        .map(data => data.json());

       // return Observable.of(response); //.throttleTime(2000);
    }

    logOut(): Observable<LoginResponseModel> {

        let response: LoginResponseModel = {
            isValidUser: false,
            errorMessage: ""
        }

        return Observable.of(response); //.throttleTime(2000);
    }

}