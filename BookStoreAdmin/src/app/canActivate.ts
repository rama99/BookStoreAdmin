import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { CanActivate , ActivatedRouteSnapshot  ,RouterStateSnapshot } from '@angular/router';

@Injectable()
export class canActivateGuard implements CanActivate {

    constructor() {

    }

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):Observable<boolean> {
        return Observable.of(true);
    }

}




