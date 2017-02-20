import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBook } from './actions';
import { FormBuilder , FormArray , FormGroup , Validators } from '@angular/forms';

@Component({
    selector: 'book-add',
    templateUrl: '/book/add'

})

export class BookAddComponent implements OnInit {

    public fg: FormGroup;
    @ViewChild('staticModal') model: any;

    constructor(
        private fb: FormBuilder,
        public store: Store<{}>) {

    }

    ngOnInit() {

        this.fg = this.fb.group({
            "id": [0, Validators.compose([Validators.required])],
            "title": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])],
            "category": [, Validators.compose([Validators.required])],
            "authors": [, Validators.compose([Validators.required])],
            "price": [, Validators.compose([Validators.required])]
        })
    }

    addBook() {

        if (this.fg.invalid) {
            alert('invalid');
            this.model.show();
        }
        else {
            this.store.dispatch(addBook(this.fg.value));
            console.log(this.fg.value);
        }
        
    }

}