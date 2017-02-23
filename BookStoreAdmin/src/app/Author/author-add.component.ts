import { Component , OnInit , ViewChild , ElementRef} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addAuthor } from './actions';

import { ActivatedRoute , Router } from '@angular/router';

@Component({
    selector: 'author-add',
    templateUrl:'/author/add'

})


export class AuthorAddComponent implements OnInit {

    error: string;
    fg: FormGroup;
    @ViewChild('staticModal') model: any;

    constructor(
        private formBuilder: FormBuilder,
        public store: Store<{}>,
        private router: Router,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.fg = this.formBuilder.group({
            "id": ["0"],
            "first_name": ["", Validators.compose([Validators.required, Validators.maxLength(50)])],
            "last_name": ["", Validators.compose([Validators.required, Validators.maxLength(50)])],
            "description": ["", Validators.compose([Validators.required, Validators.maxLength(2000)])]
        })
       
    }

    addAuthor() {
        console.log(this.fg.value);

        if (this.fg.invalid) {
            this.error = "Please enter valid values";
            this.model.show();
        }
        else {
            this.store.dispatch(addAuthor(this.fg.value));
            this.fg.reset();
        }
    }

}