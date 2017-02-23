import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';



@Component({
    selector: '',
    templateUrl: `home/about`
})

export class AboutComponent implements OnInit {

    constructor(private title: Title) {

    }

    ngOnInit() {
        this.title.setTitle('About');
    }

}