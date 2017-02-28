import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
//import 'rxjs/add/observable/create';
import 'rxjs/add/observable/fromEvent';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/last';

import 'rxjs/add/operator/switch';

import 'rxjs/add/operator/concat'; // one after another , startwith
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeAll';

import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/delayWhen';

import 'rxjs/add/operator/debounceTime';

@Component({
    selector: '',
    templateUrl:'/home/home'
})

export class HomeComponent implements OnInit {

    constructor(private title: Title) {

        let data$ = Observable.interval(1000);

        //data$.
           
    }

    ngOnInit() {
        this.title.setTitle('Home');
    }

}