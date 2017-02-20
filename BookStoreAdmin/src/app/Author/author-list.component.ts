import { Component, ViewChild , OnInit} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';

import { loadAuthors } from './actions';

import { Store } from '@ngrx/store';

@Component({
    selector: '',
    templateUrl:   `/author/list`

})

export class AuthorListComponent implements OnInit {

    constructor(
        public store: Store<{}>
    ) { }

    ngOnInit() {
        this.store.dispatch(loadAuthors());       
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