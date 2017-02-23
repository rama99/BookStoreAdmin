import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: '',
    templateUrl:'/category'
})

export class CategoryMainComponent implements OnInit {

    constructor(private title: Title) {

    }

    ngOnInit() {
        this.title.setTitle('Categories');
    }
}