import { Injectable , Inject } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { LoginModel, LoginResponseModel } from './login-model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CONFIG } from './config';


@Injectable()
export class UserService {

    constructor(private http: Http,
                @Inject(CONFIG) private config:any) {

    }

    validateUser(login: LoginModel): Observable<LoginResponseModel> {

        let response: LoginResponseModel = {
            isValidUser: true,
            errorMessage:""
        }

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.config.apiUrl + '/user/login', login, { headers: headers })
                        .map(data => data.json());       
    }

    canActivate(): Observable<any> {

        return this.http.get(this.config.apiUrl + '/user/CanActivate')
            .map(data => data.json());
    }

    logOut(): Observable<LoginResponseModel> {

        let response: LoginResponseModel = {
            isValidUser: false,
            errorMessage: ""
        }

        return this.http.get(this.config.apiUrl + '/user/logout')
            .map(data => data.json());      
    }

}