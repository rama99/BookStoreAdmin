import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: '',
    templateUrl:'/home/home'
})

export class HomeComponent implements OnInit {

    constructor(private title: Title) {

    }

    ngOnInit() {
        this.title.setTitle('Home');
    }

}