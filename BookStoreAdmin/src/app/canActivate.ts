import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import  'rxjs/add/operator/map';

import { Store } from '@ngrx/store';
import { LoginResponseModel } from './login-model';
import { StoreModel} from './StoreModel';

@Injectable()
export class canActivateGuard implements CanActivate {

    constructor(public store: Store<StoreModel>) {

    }

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):Observable<boolean> {

       return this.store.select('user')
           .map((data: LoginResponseModel) => { return data.isValidUser } );
       
    }

}




