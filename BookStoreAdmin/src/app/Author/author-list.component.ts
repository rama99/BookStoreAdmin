import { Component, ViewChild , OnInit , AfterViewInit} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';

import { loadAuthors } from './actions';
import { AuthorModel } from './author-model';

import { Store } from '@ngrx/store';

@Component({
    selector: '',
    templateUrl:   `/author/list`

})

export class AuthorListComponent implements OnInit, AfterViewInit {

    @ViewChild('staticModal') model: any;

    editAuthor: AuthorModel;

    constructor(
        public store: Store<{}>
    ) { }

    ngOnInit() {
        this.store.dispatch(loadAuthors());        
    }

    ngAfterViewInit() {
        
    }

    edit(author: AuthorModel) {       
        this.editAuthor = author;
        this.model.show();       
    }

    public totalItems: number = 64;
    public currentPage: number = 4;
    public smallnumPages: number = 0;

    public setPage(pageNo: number): void {
        this.currentPage = pageNo;
    }

    public pageChanged(event: any): void {        
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    }

}