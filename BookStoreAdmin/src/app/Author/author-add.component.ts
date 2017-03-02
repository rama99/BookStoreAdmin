import { Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewInit, ViewContainerRef} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { addAuthor } from './actions';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorModel } from './author-model';

@Component({
    selector: 'author-add',
    templateUrl:'/author/add'

})


export class AuthorAddComponent implements OnInit, AfterViewInit{

    error: string;
    fg: FormGroup;
    @ViewChild('staticModal') model: any;
    @ViewChild('firstName') firstName: ElementRef;

    constructor(
        private formBuilder: FormBuilder,
        public store: Store<{}>,
        private router: Router,
        private titleService: Title,
        private renderer: Renderer,
        public toastr: ToastsManager,
        vcr: ViewContainerRef
    ) 
    {
        // Use with angular v2.2 or above
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.fg = this.formBuilder.group({
            "id": ["0"],
            "first_name": ["", Validators.compose([Validators.required, Validators.maxLength(50)])],
            "last_name": ["", Validators.compose([Validators.required, Validators.maxLength(50)])],
            "description": ["", Validators.compose([Validators.required, Validators.maxLength(2000)])]
        })
       
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.firstName.nativeElement, 'focus');
    }

    addAuthor() {
        console.log(this.fg.value);

        if (this.fg.invalid) {
            this.error = "Please enter valid values";
            this.model.show();
        }
        else {
            this.store.dispatch(addAuthor(this.fg.value));

          //  console.log('2')

            this.store.subscribe(() => console.log(2));

          /*  this.store.select("authors").subscribe(
                (data: AuthorModel[]) => { alert( 'Total Reords' + data.length); }
            );

            this.toastr.success('2Added!!');
            this.fg.reset(); */
        }
    }

}