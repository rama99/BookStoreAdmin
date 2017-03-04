import { Component, OnInit, Input, OnChanges, AfterViewInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormArray, FormGroup , Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AuthorModel } from './author-model';
import { editAuthor } from './actions';

@Component({
    selector: 'author-edit',
    templateUrl:'./author/edit'
})

export class AuthorEditComponent implements OnInit, OnChanges, AfterViewInit{

    @Input() author: AuthorModel;
    @Input() model: any;
    fg: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        public store:Store<{}>

    ) {}

    ngOnInit() { 
       
        this.fg = this.formBuilder.group({
            "id": ["", Validators.compose([Validators.required])],
            "first_name": ["", Validators.compose([Validators.required])],
            "last_name": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])]
        });  
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }): any {
        
        if (changes['author'] && this.author) {
            this.fg.setValue({
                id: this.author.id,
                first_name: this.author.first_name,
                last_name: this.author.last_name,
                description: this.author.description
            });
        }
                    
    }

    ngAfterViewInit() {      
       
    }

    edit() {
        try {
            
            this.store.dispatch(editAuthor(this.fg.value));
            this.model.hide();
        }
        catch (err) {
            alert('error');
        }
    }

}