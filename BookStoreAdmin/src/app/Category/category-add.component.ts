import { Component , OnInit , ViewChild  , Renderer , AfterViewInit , ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCategory } from './actions';

@Component({
    selector: 'category-add',
    templateUrl:'/category/add'

})

export class CategoryAddComponent implements OnInit , AfterViewInit {

    fg: FormGroup;
    @ViewChild('staticModal') modal: any
    @ViewChild('name') name: ElementRef; 

    constructor(
        private fb: FormBuilder,
        public store: Store<{}>,
        private renderer:Renderer
    ) {

    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.name.nativeElement, 'focus');
    }

    ngOnInit() {

     this.fg =   this.fb.group({
            "id": [0, Validators.compose([Validators.required])],
            "name": ["", Validators.compose([Validators.required])],
            "description": ["", Validators.compose([Validators.required])]
        })

    }

    addCategory() {       

        if (this.fg.invalid) {
            this.modal.show();
        }
        else {
            this.store.dispatch(addCategory(this.fg.value));
            this.fg.reset();
        }        
    }

}