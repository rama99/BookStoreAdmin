import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: '',
    templateUrl: '/author/'
})

export class AuthorMainComponent implements OnInit {

    constructor(private title: Title) {
        
    }

    ngOnInit() {
        this.title.setTitle('Authors');
    }

}