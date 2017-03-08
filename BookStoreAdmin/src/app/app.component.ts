import { Component , OnInit , DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreModel } from './storemodel';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { logOut } from './actions';
import { LoginResponseModel } from './login-model';


@Component({
    selector: 'my-app',
    templateUrl:'src/app/app.component.html'
})


export class AppComponent implements OnInit , DoCheck{

    public blnDisplayMenu: boolean;

    constructor( public store: Store<StoreModel>,
        private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit() {  

        this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                if (e.url == '/' || e.url == '/spa/login') {                   
                    this.blnDisplayMenu = false;
                }
                else {                    
                    this.blnDisplayMenu = true;
                }
            }
        });
    }

    ngDoCheck() {    

    }

    logOut() {
        this.store.dispatch(logOut());
        this.router.navigate(['spa', 'login']);
    }
}
