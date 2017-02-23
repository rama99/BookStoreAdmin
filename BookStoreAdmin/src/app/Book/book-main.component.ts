import { Component  , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: '',
    templateUrl: '/book'
})

export class BookMainComponent implements OnInit {

    constructor(private title: Title) {

    }

    ngOnInit() {
        this.title.setTitle('Books');
    }


}