import { Component , OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreModel } from './storemodel';
import { Router, ActivatedRoute } from '@angular/router';
import { logOut } from './actions';
import { LoginResponseModel } from './login-model';


@Component({
    selector: 'my-app',
    templateUrl:'src/app/app.component.html'
})


export class AppComponent  {

    public blnDisplayMenu: boolean;

    constructor( public store: Store<StoreModel>,
        private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.store.select('user').subscribe(
            (data: LoginResponseModel) => { this.blnDisplayMenu = data.isValidUser }
        )
    }

    logOut() {
        this.store.dispatch(logOut());
        this.router.navigate(['login']);
    }



}
