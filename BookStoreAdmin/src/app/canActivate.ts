import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router} from '@angular/router';
import 'rxjs/add/operator/map';


import { Store } from '@ngrx/store';
import { LoginResponseModel } from './login-model';
import { StoreModel } from './StoreModel';
import { canActivate, validateUserSuccess, canActivateSuccess} from './actions';
import { UserService } from './user.service';

@Injectable()
export class canActivateGuard implements CanActivate {

    constructor( public store: Store<StoreModel>,
        public userService: UserService,
        public routerMain: Router
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Observable<boolean> {

        // this.store.dispatch(canActivate());   

        return this.userService.canActivate()
            .map(data => {

                if (!data.data.isValidUser) {
                    this.routerMain.navigate(['spa', 'login']);
                }

                return data.data.isValidUser;
            });

   

        //return Observable.of(true);
            
    }

}




