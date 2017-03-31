import { Component, ViewChild, OnInit, DoCheck, ChangeDetectionStrategy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { UserRequest , UserResponse } from './user.model';

@Component({
    selector: '',
    templateUrl: 'user/search',
    providers: [],
    changeDetection:ChangeDetectionStrategy.Default

})
export class UserSearchComponent implements OnInit {

    username: FormControl = new FormControl();
    users: Observable<UserResponse[]>;
    

    constructor(private userService:UserService) { }

    ngOnInit() {

       this.users =  this.username.valueChanges
                         .debounceTime(1000)
                         .distinctUntilChanged()
                         .switchMap(search => this.userService.searchUsers(search))
                         .map(data => data.data);            

    }
}